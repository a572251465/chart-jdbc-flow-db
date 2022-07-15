import { WebSocketServer } from 'ws'
import type { WebSocket } from 'ws'

const enum IMessageType {
  INIT = 'WS_INIT',
  SEND = 'WS_SEND',
  CLOSE = 'WS_CLOSE'
}

interface IRecordType {
  type: IMessageType,
  from: string,
  to: string,
  message: string,
  time: number
}

const wsRecords: Record<string, WebSocket> = {}

/**
 * @author lihh
 * @description socket 初始化 消息处理
 * @param data  传递的数据
 * @param ws webSocket
 */
const socketInitHandle = (data: IRecordType, ws: WebSocket) => {
  const { from } = data
  wsRecords[from] = ws
}

/**
 * @author lihh
 * @description socket send 消息处理
 * @param data 传递的数据
 */
const socketSendHandle = (data: IRecordType) => {
  const { from, to, message } = data
  if (from === to) return
  const ws = wsRecords[to]
  if (!ws) return

  ws.send(message)
}

const wss = new WebSocketServer({ port: 9997 })
wss.on('connection', function(ws) {
  ws.on('message', function(data: IRecordType) {
    switch (data.type) {
      case IMessageType.INIT:
        socketInitHandle(data, ws)
        break
      case IMessageType.SEND:
        socketSendHandle(data)
        break
      case IMessageType.CLOSE:
        break
      default:
        return
    }
  })
})
console.log('socket server is running at port 9997')
