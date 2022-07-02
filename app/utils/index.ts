import { IDbConnectInfo } from '../types'

// 表示当前的db 登录信息
let currentDbLoginInfo: IDbConnectInfo | null = null

/**
 * @author lihh
 * @description 设置当前登录 db信息
 * @param bodys 登录信息
 */
export const setCurrentDBLoginInfo = (bodys: IDbConnectInfo) => {
  currentDbLoginInfo = bodys
}

/**
 * @author lihh
 * @description 获取当前登录 db信息
 */
export const getCurrentDBLoginInfo = () => currentDbLoginInfo
