import { useConnect } from '../hook/useConnect'
import { useQuery } from '../hook/useQuery'
import { Connection } from 'mysql'
import { getCurrentDBLoginInfo } from '../utils'
import { useResult } from '../hook/useResult'
import { tableInAllFiled } from '../sql'

type IResult = {
  fieldName: string,
  fieldComment: string
}

class TableFieldService {
  /**
   * @author lihh
   * @description 查询表中的所有的字段
   * @param bodys 传递的body信息
   */
  index = async (bodys: { table: string }) => {
    let dbClose
    const [successResult, errorResult] = useResult()
    const currentDbInfo = getCurrentDBLoginInfo()!
    try {
      const [open, close] = useConnect<Connection>(currentDbInfo)
      dbClose = close
      const connection = await open()

      // 查询数据
      const [query] = useQuery<IResult[]>(connection)
      let result = (await query(tableInAllFiled(bodys.table, currentDbInfo.database))) || []

      // 进行代码格式化 如果comment没有的话 用字段代替
      result = result.map(({ fieldName, fieldComment }) => ({ fieldName: fieldName, fieldComment: fieldComment || fieldName } as IResult))

      return successResult<IResult[]>(result)
    } catch (err) {
      return errorResult(err)
    } finally {
      dbClose()
    }
  }
}

export default new TableFieldService()
