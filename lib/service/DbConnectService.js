"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useConnect_1 = require("../hook/useConnect");
const useQuery_1 = require("../hook/useQuery");
const utils_1 = require("../utils");
const useResult_1 = require("../hook/useResult");
class DbConnectService {
    /**
     * @author lihh
     * @description 进行数据库db链接
     */
    index = async (bodys) => {
        let dbClose;
        const [successResult, errorResult] = (0, useResult_1.useResult)();
        try {
            const [open, close] = (0, useConnect_1.useConnect)(bodys);
            dbClose = close;
            const connection = await open();
            // 保存用户登录信息
            (0, utils_1.setCurrentDBLoginInfo)(bodys);
            // 查询数据
            const [query] = (0, useQuery_1.useQuery)(connection);
            const result = await query(`SELECT tab.TABLE_NAME tableName FROM information_schema.TABLES tab WHERE TABLE_SCHEMA = '${bodys.database}'`);
            return successResult(result);
        }
        catch (err) {
            return errorResult(err);
        }
        finally {
            dbClose();
        }
    };
}
exports.default = new DbConnectService();
//# sourceMappingURL=DbConnectService.js.map