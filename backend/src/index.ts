import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { jwt, sign, verify } from 'hono/jwt';
import bcrypt from "bcryptjs";

import { userRouters } from './routes/authRoutes';
import { blogRouter } from './routes/blog';
import { Bindings } from 'hono/types';
import { cors } from 'hono/cors';




const app = new Hono<Bindings>();

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

export default app;