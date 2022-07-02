import KoaRouter from '@koa/router'
import dbConnectController from '../controller/DbConnectController'

const router = new KoaRouter()

router.post('/public/connect', dbConnectController.index)

export default router
