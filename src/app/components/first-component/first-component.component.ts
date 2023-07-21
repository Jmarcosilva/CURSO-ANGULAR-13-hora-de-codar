import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name = "joao";
  age = 30;
  job = "programador";
  hobbies = ['Correr','Jogar','Estudar'];
  car ={
    nome: 'polo',
    ano: 2019,
  }

}
