import express from 'express';
import ratelimit from 'express-rate-limit';
import logger from '../utils/logger';

import { join } from 'path';

import mainEndpoint from './routes/mainEndpoint';
import errorEndpoint from './routes/errorEndpoint';

const app = express();
const port = process.env.PORT;
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

app.listen(port, () => {
    console.clear();
    logger.debug(`Listen ${ port }`);
});

export = app
