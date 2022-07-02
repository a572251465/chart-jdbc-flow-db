import { Connection } from 'mysql'

interface IQuery<T> {
  (sql: string): Promise<T>
}

/**
 * @author lihh
 * @description 进行sql语句查询 使用hook避免回调
 * @param db 连接的db
 */
export const useQuery = <T>(db: Connection): [IQuery<T>] => {
  const query = (sql: string) => {
    return new Promise<T>((resolve, reject) => {
      db.query(sql, function(error, results) {
        if (error) {
          reject(error)
          return
        }

        resolve(results)
      })
    })
  }
  return [query]
}
