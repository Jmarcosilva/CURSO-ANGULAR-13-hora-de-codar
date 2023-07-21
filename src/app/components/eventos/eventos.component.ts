import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show:boolean= false;
  mostrar:boolean=false;
  mostraCria=("");

  showMessage(): void{
    this.show= !this.show //togle alterna estado
  }

mostrarMensagem(){
    this.mostrar=!this.mostrar
  }

  mudarCor(){
    this.mostraCria=document.body.style.background="red"
    
  }
  

 

    

}
