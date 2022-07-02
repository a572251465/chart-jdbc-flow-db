"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableInAllFiled = void 0;
/**
 * @author lihh
 * @description 查询表中的所有的字段
 * @param table 表名
 * @param database 数据库名称
 */
const tableInAllFiled = (table, database) => (`select tab.COLUMN_NAME fieldName, tab.COLUMN_COMMENT fieldComment from information_schema.COLUMNS tab
where table_name = '${table}' and table_schema = '${database}'`);
exports.tableInAllFiled = tableInAllFiled;
//# sourceMappingURL=tableInAllFiled.js.map