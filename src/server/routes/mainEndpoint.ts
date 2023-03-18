import express from 'express';

import { join } from 'path';

export default express.Router().get('/', (req, res) => {
    res.status(200).sendFile(join(process.cwd(), 'src', 'resources', 'main.html'));
});
