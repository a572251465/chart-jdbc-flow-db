import { IDbConnectInfo, INormalFn } from '../types'
import mysql, { Connection } from 'mysql'

export interface IOpen<T> {
  (...args: any[]): Promise<T>
}

/**
 * @author lihh
 * @description 进行db连接
 * @param dbInfo 相关的de信息
 */
export const useConnect = <T>(dbInfo: IDbConnectInfo): [IOpen<T>, INormalFn] => {
  let connect: Connection | null = null
  const open = () => {
    return new Promise<T>((resolve, reject) => {
      const connection = mysql.createConnection({ ...dbInfo })
      connection.connect(function(err) {
        if (err) {
          reject(err)
          return
        }

        connect = connection
        resolve(connection as any as T)
      })
    })
  }

  const close = () => connect && connect.end(() => connect = null)

  return [open, close]
}
