import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Socket } from 'net';

@WebSocketGateway({ transports: ['websocket'], cors: true })
export class EventGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private client: any[];
  private server: any;

  constructor() {}

  afterInit(server: any) {
    this.server = server;
    this.client = [];
    console.log('Init');
  }

  handleConnection(_client: any, ...args: any[]) {
    const account = _client.handshake.query.account;
    if (!account) {
      _client.disconnect(true);
    }
    _client.account = account;
    this.client[account] = _client;
    console.log(Object.keys(this.client));
  }

  handleDisconnect(client: any) {
    const account = client.handshake.auth.account;
    if (account) {
      delete this.client[account];
    }
  }

  @SubscribeMessage('request_transfer')
  async handleMessage(client: any, payload: any) {
    try {
      const emitSocket = this.client[payload.to];
      if (emitSocket) {
        emitSocket.emit('request_transfer', {
          ...payload,
          to: client.account,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
