import KoaRouter from '@koa/router'
import getDataByTableController from '../controller/GetDataByTableController'

const router = new KoaRouter()

router.post('/public/getDataByTable', getDataByTableController.index)

export default router
