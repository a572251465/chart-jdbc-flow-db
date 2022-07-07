import { Context } from 'koa'
import sqlExecService from '../service/SqlExecService'

class SqlExecController {

  /**
   * @author lihh
   * @description 进行数据库连接的索引方法
   * @param ctx koa的上下文
   */
  index = async (ctx: Context) => {
    const bodys = ctx.request.body as { sql: string }
    ctx.body = await sqlExecService.index(bodys)
  }
}

export default new SqlExecController()
