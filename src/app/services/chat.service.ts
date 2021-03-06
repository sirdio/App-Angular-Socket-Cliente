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
      de: this._wsService.getUsuario().nombre,
      cuerpo: mensaje
    };
    this._wsService.emit( 'mensaje', payload );

  }

  getMessage(){
    ///esta linea permite escuchar mensaje nuevos
    return this._wsService.listen( 'mensaje-nuevo');
  }
  
  getMessagePrivate( ) {
    ///esta linea permite escuchar mensaje privados
    return this._wsService.listen('mensaje-privado');
  }

  getUsuariosActivos( ) {
    return this._wsService.listen( 'usuarios-activos' );
  }

  obtenerUsiariosActivos( ) {
    this._wsService.emit( 'obtener-usuarios');
  }
}
