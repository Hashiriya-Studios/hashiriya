import express from 'express';
import ratelimit from 'express-rate-limit';

import { join } from 'path';
import mainEndpoint from './routes/mainEndpoint';
import errorEndpoint from './routes/errorEndpoint';

const app = express();
const rateLimit = ratelimit({
    max: 20,
    windowMs: 60000,
    message: 'Too much requests.'
});
// Middleware
app.use(rateLimit);
app.use(express.static(join(process.cwd(), 'public')));

// Endpoints
app.use('/', mainEndpoint);
app.use('*', errorEndpoint); // Error Endpoint

export = app
