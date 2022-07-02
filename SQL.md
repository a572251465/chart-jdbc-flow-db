## Sql

- 查询所有的表

> `SELECT tab.TABLE_NAME tableName FROM information_schema.TABLES tab WHERE TABLE_SCHEMA = '数据库名称'`

- 查询表中的所有字段

> `select tab.COLUMN_NAME fieldName, tab.COLUMN_COMMENT fieldComment from information_schema.COLUMNS tab
where table_name = '表名' and table_schema = '数据库名称'`
