import { Context } from 'koa'
import dbConnectService from '../service/DbConnectService'
import { IDbConnectInfo } from '../types'

class DbConnectController {

  /**
   * @author lihh
   * @description 进行数据库连接的索引方法
   * @param ctx koa的上下文
   */
  index = async (ctx: Context) => {
    const bodys = ctx.request.body as IDbConnectInfo
    ctx.body = await dbConnectService.index(bodys)
  }
}

export default new DbConnectController()
