import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  usuariosActivosObs: Observable<any>;
  constructor(
        public _chatService: ChatService
  ) { }

  ngOnInit() {
    this.usuariosActivosObs = this._chatService.getUsuariosActivos();
    this._chatService.obtenerUsiariosActivos();
  }

}
