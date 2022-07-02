export type IDbConnectInfo = {
  host: string,
  user: string,
  password: string,
  database: string,
  port: number
}

export type  INormalFn = {
  (...args: any[]): any
}
