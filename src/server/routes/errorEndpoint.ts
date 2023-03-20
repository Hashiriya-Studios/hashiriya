import express from 'express';

import { join } from 'path';

export default express.Router().get('/', (req, res) => {
    res.redirect(404, join(process.cwd(), 'public', 'resources', 'main.html'));
});
