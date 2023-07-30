import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { Animais2ServiceService } from 'src/app/services/serviceAnimais2/animais2-service.service';

@Component({
  selector: 'app-aula18',
  templateUrl: './aula18.component.html',
  styleUrls: ['./aula18.component.css']
})
export class Aula18Component {
  animais2:Animal[] = [];

  constructor(private animais2Service: Animais2ServiceService){
    this.getAnimais2()
  }

  getAnimais2(): void{
    this.animais2Service.getAll().subscribe((animais2) => (this.animais2 = animais2));
  }

}
