"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslog_1 = require("tslog");
exports.default = new tslog_1.Logger({
    exposeStack: false,
    displayFunctionName: false,
    displayInstanceName: false,
    dateTimePattern: 'year-day-month hour:minute',
    displayFilePath: 'displayAll'
});
//# sourceMappingURL=logger.js.map