import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-charge-number',
  templateUrl: './charge-number.component.html',
  styleUrls: ['./charge-number.component.css']
})
export class ChargeNumberComponent {
  @Output() numeroDeCobranca:EventEmitter<any>= new EventEmitter()

  manipularClick(){
   this.numeroDeCobranca.emit();
  }

}
