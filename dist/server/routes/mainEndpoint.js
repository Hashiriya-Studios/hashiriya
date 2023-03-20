"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
exports.default = express_1.default.Router().get('/', (req, res) => {
    res.status(200).sendFile((0, path_1.join)(process.cwd(), 'public', 'resources', 'main.html'));
});
//# sourceMappingURL=mainEndpoint.js.map