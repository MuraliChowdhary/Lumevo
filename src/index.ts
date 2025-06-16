import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { blogRouter } from './routes/blog';
import { userRouters } from './routes/authRoutes';
import { getCorsHeaders, handleOptions } from './utils/getHeaders'; // 🔥 Import utils

type Binding = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
  userRole: string;
};

const app = new Hono<{ Bindings: Binding; Variables: Variables }>();


app.use("*",cors())

// OPTIONS handler (🔥 Required for preflight requests)
// app.options('*', (c) => {
//   const origin = c.req.header('Origin') ?? '*';
//   return handleOptions(origin);
// });

// Root route
app.get('/', (c) => {
  return c.json({
    message: 'Newsletter Blog API is running!',
    version: '1.0.0',
  });
});

// Routes
app.route('/api/v1/user', userRouters);
app.route('/api/v1/blog', blogRouter);

// Error handling
app.notFound((c) => {
  return c.json({ error: 'Route not found' }, 404);
});

app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;
