"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * @author lihh
 * @description 动态注入路由
 * @param app
 */
const routes = (app) => {
    const dirs = fs_1.default.readdirSync(__dirname);
    const excludeFiles = ['index.js'];
    dirs.forEach(async (filename) => {
        if (excludeFiles.includes(filename) || filename.endsWith('map'))
            return;
        // 读取到每个路由 进行注册
        const router = require(`./${filename}`).default;
        app.use(router.routes()).use(router.allowedMethods());
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map