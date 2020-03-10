import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor( private socket: Socket ){
    this.checkStatus();
  } 

  checkStatus(  ){
    this.socket.on( 'connect', () => { 
      console.log( 'conectado al Servidor' );
      this.socketStatus = true;
     } );

    this.socket.on( 'disconnect', () => { 
      console.log( 'desconectado al Servidor' );
      this.socketStatus = false;
     } );
  }

  //formato de la funcion emit('EVENTO', payload, callback)
  emit( evento: string, payload?: any, callback?: Function  ){
    console.log( "emitiendo mensaje" );
    this.socket.emit( evento, payload, callback );
    
  }

  ///funcion que escucha eventos
  listen( evento:string ){
    return this.socket.fromEvent( evento );
  }

}
