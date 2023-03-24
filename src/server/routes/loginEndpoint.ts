import express from 'express';

import { join } from 'path';

export default express.Router().get('/', (req, res) => {
    res.render('resources/user/login.ejs');
});
