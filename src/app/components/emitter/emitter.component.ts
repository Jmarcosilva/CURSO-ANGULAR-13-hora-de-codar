import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  meuNumero:number=0;


  onNumeroDeCobranca(){
   this.meuNumero = Math.floor(Math.random() * 10);
  }

}
