import { Context } from 'koa'
import getDataByTableService, { IGetDataByTable } from '../service/GetDataByTableService'

class GetDataByTableController {

  /**
   * @author lihh
   * @description 进行数据库连接的索引方法
   * @param ctx koa的上下文
   */
  index = async (ctx: Context) => {
    const bodys = ctx.request.body as IGetDataByTable
    ctx.body = await getDataByTableService.index(bodys)
  }
}

export default new GetDataByTableController()
