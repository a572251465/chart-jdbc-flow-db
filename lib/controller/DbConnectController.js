"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DbConnectService_1 = __importDefault(require("../service/DbConnectService"));
class DbConnectController {
    /**
     * @author lihh
     * @description 进行数据库连接的索引方法
     * @param ctx koa的上下文
     */
    index = async (ctx) => {
        const bodys = ctx.request.body;
        ctx.body = await DbConnectService_1.default.index(bodys);
    };
}
exports.default = new DbConnectController();
//# sourceMappingURL=DbConnectController.js.map