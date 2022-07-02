"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const DbConnectController_1 = __importDefault(require("../controller/DbConnectController"));
const router = new router_1.default();
router.post('/public/connect', DbConnectController_1.default.index);
exports.default = router;
//# sourceMappingURL=connect.js.map