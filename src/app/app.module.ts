import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/aula00-home/first-component.component';
import { ParentDateComponent } from './components/parent-date/parent-date.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChargeNumberComponent } from './components/charge-number/charge-number.component';
import { ListRenderComponent } from './components/aula12-list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ServicesdoAngularComponent } from './components/services-do-angular/servicesdo-angular.component';
import { RouterComponent } from './components/aula17-router/router.component';
import { Aula18Component } from './components/aula18/aula18.component';
import { Aula18RevisaoComponent } from './components/aula18-revisao/aula18-revisao.component';
import { Aula19ItemDetailComponent } from './components/aula19-item-detail/aula19-item-detail.component';
import { Aula01IntroducaoComponent } from './components/aula01-introducao/aula01-introducao.component';
import { Aula02InstalandoAngularComponent } from './components/aula02-instalando-angular/aula02-instalando-angular.component';
import { Aula03EstruturaAngularComponent } from './components/aula03-estrutura-angular/aula03-estrutura-angular.component';
import { Aula06CssComponent } from './components/aula06-css/aula06-css.component';
import { Aula04CriandoComponentesComponent } from './components/aula04-criando-componentes/aula04-criando-componentes.component';
import { Aula05DadosNoTemplateComponent } from './components/aula05-dados-no-template/aula05-dados-no-template.component';
import { Aula13InterfacesComponent } from './components/aula13-interfaces/aula13-interfaces.component';
import { Aula19ItemDetalheComponent } from './components/aula19-item-detalhe/aula19-item-detalhe.component';






@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDateComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChargeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ServicesdoAngularComponent,
    RouterComponent,
    Aula18Component,
    Aula18RevisaoComponent,
    Aula19ItemDetailComponent,
    Aula01IntroducaoComponent,
    Aula02InstalandoAngularComponent,
    Aula03EstruturaAngularComponent,
    Aula06CssComponent,
    Aula04CriandoComponentesComponent,
    Aula05DadosNoTemplateComponent,
    Aula13InterfacesComponent,
    Aula19ItemDetalheComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
