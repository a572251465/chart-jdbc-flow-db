"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const TableFieldController_1 = __importDefault(require("../controller/TableFieldController"));
const router = new router_1.default();
router.post('/public/tableAllField', TableFieldController_1.default.index);
exports.default = router;
//# sourceMappingURL=tableAllField.js.map