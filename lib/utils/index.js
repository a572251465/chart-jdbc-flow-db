"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDBLoginInfo = exports.setCurrentDBLoginInfo = void 0;
// 表示当前的db 登录信息
let currentDbLoginInfo = null;
/**
 * @author lihh
 * @description 设置当前登录 db信息
 * @param bodys 登录信息
 */
const setCurrentDBLoginInfo = (bodys) => {
    currentDbLoginInfo = bodys;
};
exports.setCurrentDBLoginInfo = setCurrentDBLoginInfo;
/**
 * @author lihh
 * @description 获取当前登录 db信息
 */
const getCurrentDBLoginInfo = () => currentDbLoginInfo;
exports.getCurrentDBLoginInfo = getCurrentDBLoginInfo;
//# sourceMappingURL=index.js.map