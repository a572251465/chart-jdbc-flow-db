"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useConnect_1 = require("../hook/useConnect");
const useQuery_1 = require("../hook/useQuery");
const utils_1 = require("../utils");
const useResult_1 = require("../hook/useResult");
class GetDataByTableService {
    /**
     * @author lihh
     * @description 查询表中的数据
     * @param bodys 传递的body信息
     */
    index = async (bodys) => {
        let dbClose;
        const [successResult, errorResult] = (0, useResult_1.useResult)();
        const currentDbInfo = (0, utils_1.getCurrentDBLoginInfo)();
        try {
            const [open, close] = (0, useConnect_1.useConnect)(currentDbInfo);
            dbClose = close;
            const connection = await open();
            // 查询数据
            const [query] = (0, useQuery_1.useQuery)(connection);
            const result = await query(`select ${bodys.fields.join(', ')} from ${bodys.table}`);
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
exports.default = new GetDataByTableService();
//# sourceMappingURL=GetDataByTableService.js.map