import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { tick } from '@angular/core/testing';
import { element } from 'protractor';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajeSubcription: Subscription;
  contenedorMensajes: any[] =[];
  elemento: HTMLElement;
  constructor(            
        public _chatService: ChatService
  ) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajeSubcription = this._chatService.getMessage().subscribe((msg) => { 
      this.contenedorMensajes.push( msg );
      this.moverScroll();
      
     });
  }

  ngOnDestroy() {
    this.mensajeSubcription.unsubscribe();
  }

  enviar(){
    if ( this.texto.trim().length  === 0) {
      return;
    }
    this._chatService.sendMessage( this.texto );
    this.texto = '';  
  }

  moverScroll( ) {

    setTimeout(() => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    }, 50 );

  }

}
