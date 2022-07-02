/**
 * @author lihh
 * @description 查询表中的所有的字段
 * @param table 表名
 * @param database 数据库名称
 */
export const tableInAllFiled = (table: string, database: string) => (`select tab.COLUMN_NAME fieldName, tab.COLUMN_COMMENT fieldComment from information_schema.COLUMNS tab
where table_name = '${table}' and table_schema = '${database}'`)
