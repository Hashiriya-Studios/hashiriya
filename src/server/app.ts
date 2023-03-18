import express from 'express';
import ratelimit from 'express-rate-limit';

import { join } from 'path';
import mainEndpoint from './routes/mainEndpoint';

const app = express();
const rateLimit = ratelimit({
    max: 20,
    windowMs: 60000,
    message: 'Too much requests.'
});
// Middleware
app.use(rateLimit);
app.use(express.static(join(process.cwd(), '../', 'resources')));

// Endpoints
app.use('/', mainEndpoint);

export = app
