interface ISuccessFn {
  <T>(value: T): { code: 200, data: T }
}

interface IErrorFn {
  <T>(value: T): { code: 500, message: T }
}

/**
 * @author lihh
 * @description 返回结果的hook
 */
export const useResult = (): [ISuccessFn, IErrorFn] => {
  const successResult: ISuccessFn = <T>(data: T) => {
    return { code: 200, data }
  }
  const errorResult: IErrorFn = <K>(message: K) => {
    return { code: 500, message }
  }
  return [successResult, errorResult]
}
