import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/aula00-home/first-component.component';
import { ListRenderComponent } from './components/aula12-list-render/list-render.component';
import { RouterComponent } from './components/aula17-router/router.component';
import { AppComponent } from './app.component';
import { Aula18Component } from './components/aula18/aula18.component';
import { Aula19ItemDetailComponent } from './components/aula19-item-detail/aula19-item-detail.component';
import { Aula01IntroducaoComponent } from './components/aula01-introducao/aula01-introducao.component';
import { Aula02InstalandoAngularComponent } from './components/aula02-instalando-angular/aula02-instalando-angular.component';
import { Aula03EstruturaAngularComponent } from './components/aula03-estrutura-angular/aula03-estrutura-angular.component';
import { Aula06CssComponent } from './components/aula06-css/aula06-css.component';
import { Aula04CriandoComponentesComponent } from './components/aula04-criando-componentes/aula04-criando-componentes.component';
import { Aula05DadosNoTemplateComponent } from './components/aula05-dados-no-template/aula05-dados-no-template.component';
import { Aula13InterfacesComponent } from './components/aula13-interfaces/aula13-interfaces.component';
import { Aula19ItemDetalheComponent } from './components/aula19-item-detalhe/aula19-item-detalhe.component';

const routes: Routes = [
  {path:"home", component: FirstComponentComponent},
  {path:"aula01", component:Aula01IntroducaoComponent},
  {path:"aula02", component:Aula02InstalandoAngularComponent},
  {path:"aula03", component:Aula03EstruturaAngularComponent},
  {path:"aula04", component:Aula04CriandoComponentesComponent},
  {path:"aula05", component:Aula05DadosNoTemplateComponent},
  {path:"aula06", component:Aula06CssComponent},
  {path:"aula12", component:ListRenderComponent},
  {path:"aula13", component:Aula13InterfacesComponent},
  {path:"aula18", component:Aula18Component},
  {path:"list", component:ListRenderComponent},
  {path:"router", component:RouterComponent},
  {path:"aula19list/:id", component:Aula19ItemDetailComponent},
  {path:"list/:id", component:Aula19ItemDetalheComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
