import { IDbConnectInfo } from '../types'
import { useConnect } from '../hook/useConnect'
import { useQuery } from '../hook/useQuery'
import { Connection } from 'mysql'

class DbConnectService {
  /**
   * @author lihh
   * @description 进行数据库db链接
   */
  index = async (bodys: IDbConnectInfo) => {
    let dbClose
    try {
      const [open, close] = useConnect<Connection>(bodys)
      dbClose = close
      const connection = await open()

      // 查询数据
      const [query] = useQuery<{ tableName: string }[]>(connection)
      const result = await query(`SELECT tab.TABLE_NAME tableName FROM information_schema.TABLES tab WHERE TABLE_SCHEMA = '${bodys.database}'`)
      return result
    } catch (err) {
      return err
    } finally {
      dbClose()
    }
  }
}

export default new DbConnectService()
