import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
export const app = new Hono();
export const blogRouter = new Hono();
blogRouter.use("/*", async (c, next) => {
    const header = c.req.header("authorization") || "";
    try {
        const user = await verify(header, c.env.JWT_SECRET);
        if (user && user.id) {
            c.set("userId", user.id.toString()); // Store userId in context
            await next();
        }
        else {
            return c.json({ error: "Unauthorized" }, 401); // Handle unauthorized access
        }
    }
    catch (error) {
        return c.json({ error: "Invalid token or expired" }, 401); // Handle JWT verification failure
    }
});
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const authorId = await c.get("userId");
    try {
        const postBlog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: authorId
            }
        });
        return c.json({
            msg: "Sucessfully Posted the post", id: postBlog.id
        });
    }
    catch (err) {
        return c.json({
            err: "Internal server error"
        }, 500);
    }
});
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const authorId = await c.get("userId");
    try {
        const postBlog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
        return c.json({
            msg: "Sucessfully updated the post", id: postBlog.id
        });
    }
    catch (err) {
        return c.json({
            err: "Internal server error"
        }, 500);
    }
});
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // Get page and limit from query parameters, with defaults
    const page = parseInt(c.req.query('page') || '1');
    const limit = parseInt(c.req.query('limit') || '10');
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    try {
        // Get posts with pagination
        const [posts, totalPosts] = await Promise.all([
            prisma.post.findMany({
                skip,
                take: limit,
                select: {
                    content: true,
                    title: true,
                    id: true,
                    author: {
                        select: {
                            name: true
                        }
                    }
                }
            }),
            prisma.post.count() // Get total count for pagination info
        ]);
        // Calculate pagination metadata
        const totalPages = Math.ceil(totalPosts / limit);
        const hasMore = page < totalPages;
        return c.json({
            status: "success",
            data: {
                posts,
                pagination: {
                    currentPage: page,
                    totalPages,
                    pageSize: limit,
                    totalPosts,
                    hasMore
                }
            }
        });
    }
    catch (err) {
        return c.json({
            error: "Internal server error"
        }, 500);
    }
});
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = await c.req.param("id");
    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({
            msg: "Sucessfully retrived all the post", blog
        });
    }
    catch (err) {
        return c.json({
            err: "Internal server error"
        }, 500);
    }
});
//pagination
