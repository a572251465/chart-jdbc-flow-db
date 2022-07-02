import { Context } from 'koa'
import tableFieldService from '../service/TableFieldService'

class TableFieldController {

  /**
   * @author lihh
   * @description 进行数据库连接的索引方法
   * @param ctx koa的上下文
   */
  index = async (ctx: Context) => {
    const bodys = ctx.request.body as { table: string }
    ctx.body = await tableFieldService.index(bodys)
  }
}

export default new TableFieldController()
