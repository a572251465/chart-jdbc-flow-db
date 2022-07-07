import { useConnect } from '../hook/useConnect'
import { useQuery } from '../hook/useQuery'
import { Connection } from 'mysql'
import { getCurrentDBLoginInfo } from '../utils'
import { useResult } from '../hook/useResult'

class SqlExecService {
  /**
   * @author lihh
   * @description 进行数据库db链接
   */
  index = async (bodys: { sql: string }) => {
    let dbClose
    const [successResult, errorResult] = useResult()
    const currentDbInfo = getCurrentDBLoginInfo()!
    try {
      const [open, close] = useConnect<Connection>(currentDbInfo)
      dbClose = close
      const connection = await open()

      // 查询数据
      const [query] = useQuery(connection)
      let result = await query(bodys.sql)

      return successResult(result)
    } catch (err) {
      return errorResult(err)
    } finally {
      dbClose()
    }
  }
}

export default new SqlExecService()
