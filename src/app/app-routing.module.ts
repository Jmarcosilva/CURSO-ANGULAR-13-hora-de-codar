import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { RouterComponent } from './components/router/router.component';

const routes: Routes = [
  {path:"", component: FirstComponentComponent},
  {path:"list", component:ListRenderComponent},
  {path:"router", component:RouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
