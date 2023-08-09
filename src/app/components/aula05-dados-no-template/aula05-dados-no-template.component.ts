import { Component } from '@angular/core';

@Component({
  selector: 'app-aula05-dados-no-template',
  templateUrl: './aula05-dados-no-template.component.html',
  styleUrls: ['./aula05-dados-no-template.component.css']
})
export class Aula05DadosNoTemplateComponent {
  name = "joao";
  age = 30;
  job = "programador";
  hobbies = ['Correr','Jogar','Estudar'];
  car ={
    nome: 'polo',
    ano: 2019,
  }

}
