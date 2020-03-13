import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuariosGuardService } from './guards/usuarios-guard.service';


const AppRoutes: Routes  = [
  { path:'', component: LoginComponent},
  { 
    path:'mensajes', 
    component: MensajesComponent,
    canActivate: [ UsuariosGuardService ]
  },
  { path:'**', component: LoginComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot( AppRoutes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
