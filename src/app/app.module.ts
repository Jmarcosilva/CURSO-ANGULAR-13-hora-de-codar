import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDateComponent } from './components/parent-date/parent-date.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChargeNumberComponent } from './components/charge-number/charge-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ServicesdoAngularComponent } from './components/services-do-angular/servicesdo-angular.component';
import { RouterComponent } from './components/aula17-router/router.component';
import { Aula18Component } from './components/aula18/aula18.component';
import { Aula18RevisaoComponent } from './components/aula18-revisao/aula18-revisao.component';
import { ItemDetailComponent } from './components/aula19-item-detail/item-detail.component';




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
    ItemDetailComponent,
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
