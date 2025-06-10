import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
 

import { userRouters } from './routes/authRoutes';
import { blogRouter } from './routes/blog';
import { Bindings } from 'hono/types';
import { cors } from 'hono/cors';

type Binding = {
    DATABASE_URL: string;
    JWT_SECRET: string;
}
type Variables = {
    userId: string;
}


const app =  new Hono<{Bindings:Binding,Variables:Variables}>();

app.use("/*", cors());

app.route("/api/v1/user", userRouters)
app.route("/api/v1/blog", blogRouter)

app.get("/", (c) => {
    return c.json({
        msg: "Hello Lumevo"
    })
})



app.get("/user", (c) => {
    return c.json({
        msg: {
            user: "Murali",
            email: "murali@gmail.com"
        }
    })
})


    app.get('/bulk', async (c) => {
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
            select:{
              content:true,
              title:true,
              id:true,
              author:{
                select:{
                  name:true
                }
              }

            }
          }
         ),
          prisma.post.count()  // Get total count for pagination info
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
      } catch (err) {
        return c.json({
          error: "Internal server error"
        }, 500);
      }
    });
    
    app.get('/:id',async(c)=>{
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
        
        const id = await c.req.param("id");
        try{
           const blog  = await prisma.post.findFirst({
            where:{
              id:id
            },
            select:{
              id:true,
              title:true,
              content:true,
              author:{
                select:{
                name:true
                }
              }
            }
           })

        return c.json({
          msg:"Sucessfully retrived all the post",blog
        })
        }
        catch(err){
          return c.json({
             err:"Internal server error"
          },500)
        }
    
    }
    )

export default app;