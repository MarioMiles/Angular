import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouterGuard } from './auth/user-router.guard';
import { AboutComponent } from './componentes/about/about.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "hola/:nombre/:apellidos", component:HolaComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crudlocal", component:CrudLocalComponent},
  {path: "crud", component:CrudComponent},
  {path: "registro", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "listaPerfiles", component:ListaPerfilesComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
