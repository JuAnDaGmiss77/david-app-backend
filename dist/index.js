"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const config_1 = require("./config");
(0, database_1.startConnection)();
app_1.default.listen(config_1.PORT);
console.log('server is running in port', config_1.PORT);
//# sourceMappingURL=index.js.map