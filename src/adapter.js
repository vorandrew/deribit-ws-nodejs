import WS from 'nodejs-websocket'
import debug from 'debug'

let logger = debug('deribit:api')

export class Adapter {
  constructor(url) {
    this.ws = WS.connect(url)
  }
  onOpen(f) {
    this.ws.on('connect', f)
  }
  onMessage(f) {
    this.ws.on('text', f)
  }
  onError(f) {
    this.ws.on('error', f)
  }

  send(txt) {
    this.ws.send(txt)
  }
  close() {
    this.ws.close()
  }
}

export function log(...args) {
  logger(...args)
}
export function error(...args) {
  logger(...args)
}
export function nextTick(f) {
  process.nextTick(f)
}
