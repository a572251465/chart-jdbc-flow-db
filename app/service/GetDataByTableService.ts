import { useConnect } from '../hook/useConnect'
import { useQuery } from '../hook/useQuery'
import { Connection } from 'mysql'
import { getCurrentDBLoginInfo } from '../utils'
import { useResult } from '../hook/useResult'

export type IGetDataByTable = {
  table: string,
  fields: string[]
}

class GetDataByTableService {
  /**
   * @author lihh
   * @description 查询表中的数据
   * @param bodys 传递的body信息
   */
  index = async (bodys: IGetDataByTable) => {
    let dbClose
    const [successResult, errorResult] = useResult()
    const currentDbInfo = getCurrentDBLoginInfo()!
    try {
      const [open, close] = useConnect<Connection>(currentDbInfo)
      dbClose = close
      const connection = await open()

      // 查询数据
      const [query] = useQuery(connection)
      const result = await query(`select ${bodys.fields.join(', ')} from ${bodys.table}`)

      return successResult(result)
    } catch (err) {
      return errorResult(err)
    } finally {
      dbClose()
    }
  }
}

export default new GetDataByTableService()
