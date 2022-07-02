"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnect = void 0;
const mysql_1 = __importDefault(require("mysql"));
/**
 * @author lihh
 * @description 进行db连接
 * @param dbInfo 相关的de信息
 */
const useConnect = (dbInfo) => {
    let connect = null;
    const open = () => {
        return new Promise((resolve, reject) => {
            const connection = mysql_1.default.createConnection({ ...dbInfo });
            connection.connect(function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                connect = connection;
                resolve(connection);
            });
        });
    };
    const close = () => connect && connect.end(() => connect = null);
    return [open, close];
};
exports.useConnect = useConnect;
//# sourceMappingURL=useConnect.js.map