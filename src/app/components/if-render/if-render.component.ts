import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
[x: string]: any;
  canShow=true;
  name= 'Carlos'//nome errado
  nome2='Marcos'

}
