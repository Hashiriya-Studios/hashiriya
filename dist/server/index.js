"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const logger_1 = __importDefault(require("../utils/logger"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = require("path");
const mainEndpoint_1 = __importDefault(require("./routes/mainEndpoint"));
const errorEndpoint_1 = __importDefault(require("./routes/errorEndpoint"));
const loginEndpoint_1 = __importDefault(require("./routes/loginEndpoint"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const rateLimit = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60000,
    message: 'Too much requests.'
});
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(rateLimit);
app.use(express_1.default.static((0, path_1.join)(process.cwd(), 'views')));
app.use('/', mainEndpoint_1.default);
app.use('/login', loginEndpoint_1.default);
app.use('*', errorEndpoint_1.default);
app.listen(port, () => {
    console.clear();
    logger_1.default.debug(`Listen ${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map