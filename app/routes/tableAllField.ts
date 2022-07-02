import KoaRouter from '@koa/router'
import tableFieldController from '../controller/TableFieldController'

const router = new KoaRouter()

router.post('/public/tableAllField', tableFieldController.index)

export default router
