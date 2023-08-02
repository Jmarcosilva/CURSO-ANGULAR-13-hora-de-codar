import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { RouterComponent } from './components/router/router.component';
import { AppComponent } from './app.component';
import { Aula18Component } from './components/aula18/aula18.component';

const routes: Routes = [
  {path:"aula01", component:AppComponent},
  {path:"aula02", component:AppComponent},
  {path:"aula03", component:AppComponent},
  {path:"aula18", component:Aula18Component},
  {path:"", component: FirstComponentComponent},
  {path:"list", component:ListRenderComponent},
  {path:"router", component:RouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
