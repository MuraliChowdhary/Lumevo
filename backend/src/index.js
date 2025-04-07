import { Hono } from 'hono';
import { userRouters } from './routes/authRoutes';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
const app = new Hono();
app.use("/*", cors());
app.route("/api/v1/user", userRouters);
app.route("/api/v1/blog", blogRouter);
app.get("/", (c) => {
    return c.json({
        msg: "Hello Lumevo"
    });
});
app.get("/user", (c) => {
    return c.json({
        msg: {
            user: "Murali",
            email: "murali@gmail.com"
        }
    });
});
export default app;
