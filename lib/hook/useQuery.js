"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = void 0;
/**
 * @author lihh
 * @description 进行sql语句查询 使用hook避免回调
 * @param db 连接的db
 */
const useQuery = (db) => {
    const query = (sql) => {
        return new Promise((resolve, reject) => {
            db.query(sql, function (error, results) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    };
    return [query];
};
exports.useQuery = useQuery;
//# sourceMappingURL=useQuery.js.map