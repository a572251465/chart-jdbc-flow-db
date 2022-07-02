import Koa from 'koa'
import Cors from 'koa-cors'
import BodyParser from 'koa-bodyparser'
import { routes } from './routes'

// 1. 进行koa实例化
const app = new Koa()

// 2. 进行koa中间件设置
app.use(
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)
app.use(BodyParser())
routes(app)

// 3. 监听端口
app.listen(9998, function() {
  console.log('App is running at port 9998')
})
