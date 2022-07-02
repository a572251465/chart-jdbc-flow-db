"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResult = void 0;
/**
 * @author lihh
 * @description 返回结果的hook
 */
const useResult = () => {
    const successResult = (data) => {
        return { code: 200, data };
    };
    const errorResult = (message) => {
        return { code: 500, message };
    };
    return [successResult, errorResult];
};
exports.useResult = useResult;
//# sourceMappingURL=useResult.js.map