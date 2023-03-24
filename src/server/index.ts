import express from 'express';
import ratelimit from 'express-rate-limit';
import logger from '../utils/logger';
import morgan from 'morgan'

import { join } from 'path';

import mainEndpoint from './routes/mainEndpoint';
import errorEndpoint from './routes/errorEndpoint';
import loginEndpoint from './routes/loginEndpoint';

const app = express();
const port = process.env.PORT || 3000;
const rateLimit = ratelimit({
    max: 100,
    windowMs: 60000,
    message: 'Too much requests.'
});
// Middleware
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(rateLimit);
app.use(express.static(join(process.cwd(), 'views')));

// Endpoints
app.use('/', mainEndpoint);
app.use('/login', loginEndpoint);
app.use('*', errorEndpoint); // Error Endpoint

app.listen(port, () => {
    console.clear();
    logger.debug(`Listen ${ port }`);
});

export = app
