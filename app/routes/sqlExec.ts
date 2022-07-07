import KoaRouter from '@koa/router'
import sqlExecController from '../controller/SqlExecController'

const router = new KoaRouter()

router.post('/public/sql', sqlExecController.index)

export default router
