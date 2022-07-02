import fs from 'fs'
import Application from 'koa'

/**
 * @author lihh
 * @description 动态注入路由
 * @param app
 */
export const routes = (app: Application) => {
  const dirs = fs.readdirSync(__dirname)
  const excludeFiles = ['index.js']

  dirs.forEach(async (filename: string) => {
    if (excludeFiles.includes(filename) || filename.endsWith('map')) return

    // 读取到每个路由 进行注册
    const router = require(`./${filename}`).default
    app.use(router.routes()).use(router.allowedMethods())
  })
}
