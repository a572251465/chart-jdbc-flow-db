import { IDbConnectInfo } from '../types'
import { useConnect } from '../hook/useConnect'
import { useQuery } from '../hook/useQuery'
import { Connection } from 'mysql'
import { setCurrentDBLoginInfo } from '../utils'
import { useResult } from '../hook/useResult'

class DbConnectService {
  /**
   * @author lihh
   * @description 进行数据库db链接
   */
  index = async (bodys: IDbConnectInfo) => {
    let dbClose
    const [successResult, errorResult] = useResult()
    try {
      const [open, close] = useConnect<Connection>(bodys)
      dbClose = close
      const connection = await open()

      // 保存用户登录信息
      setCurrentDBLoginInfo(bodys)
      // 查询数据
      const [query] = useQuery<{ tableName: string, tableComment: string }[]>(connection)
      let result = await query(`SELECT tab.TABLE_NAME tableName, tab.TABLE_COMMENT tableComment FROM information_schema.TABLES tab WHERE TABLE_SCHEMA = '${bodys.database}'`)

      // 进行代码格式化
      result = result.map(({ tableName, tableComment }) => ({ tableName, tableComment: tableComment || tableName }))

      return successResult<{ tableName: string, tableComment: string }[]>(result)
    } catch (err) {
      return errorResult(err)
    } finally {
      dbClose()
    }
  }
}

export default new DbConnectService()
