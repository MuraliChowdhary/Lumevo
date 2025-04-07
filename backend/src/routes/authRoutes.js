import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import bcrypt from "bcryptjs";
const app = new Hono();
export const userRouters = new Hono();
userRouters.post('/signup', async (c) => {
    // Initialize Prisma client with the database URL from environment
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    console.log(c.req.json());
    try {
        const body = await c.req.json();
        const password = body.password;
        if (!body.email || !body.password) {
            return c.json({
                error: 'Email and password are required'
            }, 400);
        }
        const USerEmail = body.email;
        const userFound = await prisma.user.findFirst({
            where: {
                email: USerEmail
            }
        });
        if (userFound) {
            return c.json({
                message: "user exist"
            }, 409);
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: hashpassword
            }
        });
        const token = await sign({ id: user.id, email: user.email }, c.env.JWT_SECRET);
        return c.json({
            jwt: token,
            user: user
        });
    }
    catch (error) {
        console.error('Signup error:', error);
        c.json({
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }, 500);
        return;
    }
    finally {
        await prisma.$disconnect();
    }
});
userRouters.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const password = body.password;
        if (!body.email || !body.password) {
            return c.json({
                error: 'Email and password are required'
            }, 400);
        }
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
        if (!user) {
            return c.json({
                message: "User does not exist"
            }, 404);
        }
        const hashpassword = bcrypt.compare(password.user, password);
        if (!hashpassword) {
            return c.json({
                message: "Invalid Password"
            }, 401);
        }
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            jwt: token,
            user: user
        });
    }
    catch (err) {
        console.log(err);
        c.status(500);
        return c.json({
            error: "Internal Server error"
        });
    }
});
