import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../modelos/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario: Usuario = null;


  constructor( private socket: Socket ){
    this.cargarStorage();
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

  loguinWS( nombre: string ){
     ///retorna una promesa
     return new Promise(( resolve, reject ) => { 

       /// esta funcion realiza el emit utilizando la funcion creada mas arriba
       this.emit('configurar-usuario', { nombre: nombre }, ( resp: any ) => { 
         // registro del usuario
         this.usuario = new Usuario( nombre );
         this.guardarStrorage();
         resolve();
        });
   
       ///este emit se realiza 
       // this.socket.emit('configurar-usuario', { nombre: nombre }, ( resp ) => { 
       //   console.log( resp );
       //  });
    })
  }

  getUsuario() {
    return this.usuario;
  }

  guardarStrorage( ){
    localStorage.setItem( 'usuario', JSON.stringify( this.usuario ) );
  }

  cargarStorage( ){
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
      this.loguinWS(this.usuario.nombre);
    }else{
      this.usuario = null;
    }
  }

}
