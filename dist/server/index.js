"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const logger_1 = __importDefault(require("../utils/logger"));
const path_1 = require("path");
const mainEndpoint_1 = __importDefault(require("./routes/mainEndpoint"));
const errorEndpoint_1 = __importDefault(require("./routes/errorEndpoint"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const rateLimit = (0, express_rate_limit_1.default)({
    max: 20,
    windowMs: 60000,
    message: 'Too much requests.'
});
app.use(rateLimit);
app.use(express_1.default.static((0, path_1.join)(process.cwd(), 'public')));
app.use('/', mainEndpoint_1.default);
app.use('*', errorEndpoint_1.default);
app.listen(port, () => {
    console.clear();
    logger_1.default.debug(`Listen ${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map