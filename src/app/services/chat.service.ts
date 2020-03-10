import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
        public _wsService: WebsocketService
  ) { }

  sendMessage( mensaje: string){
    const payload = {
      de: 'Fernando',
      cuerpo: mensaje
    };
    this._wsService.emit( 'mensaje', payload );

  }

  getMessage(){
    ///esta linea permite escuchar mensaje nuevos
    return this._wsService.listen( 'mensaje-nuevo');
  }
}
