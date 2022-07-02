"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const GetDataByTableController_1 = __importDefault(require("../controller/GetDataByTableController"));
const router = new router_1.default();
router.post('/public/getDataByTable', GetDataByTableController_1.default.index);
exports.default = router;
//# sourceMappingURL=getDataByTable.js.map