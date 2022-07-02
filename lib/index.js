"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const routes_1 = require("./routes");
// 1. 进行koa实例化
const app = new koa_1.default();
// 2. 进行koa中间件设置
app.use((0, koa_cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use((0, koa_bodyparser_1.default)());
(0, routes_1.routes)(app);
// 3. 监听端口
app.listen(9998, function () {
    console.log('App is running at port 9998');
});
//# sourceMappingURL=index.js.map