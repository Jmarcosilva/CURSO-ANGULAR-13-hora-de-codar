import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/serviceAnimais/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService){

  }

  animalDetalis=""
  listaDetalis=""

  animais: Animal[] = [
    {id:1001, nome:"Tuca", tipo:"Cachorro", idade:4, foto:"https://i.pinimg.com/originals/24/b6/48/24b648325f93234d682df317553fe743.png"},
    {id:1002, nome:"Tom", tipo:"Gato" , idade:10, foto:"https://i.pinimg.com/originals/24/b6/48/24b648325f93234d682df317553fe743.png"},
    {id:1003, nome:"Frida", tipo:"Cachorro" , idade:5, foto:"https://i.pinimg.com/originals/24/b6/48/24b648325f93234d682df317553fe743.png"},
    {id:1004, nome:"Bob", tipo:"Horse",idade:1, foto:"https://i.pinimg.com/originals/24/b6/48/24b648325f93234d682df317553fe743.png"}
  ]

  mostraIdade(lista:Animal){
    this.animalDetalis= "O pet " + lista.nome + " tem " + lista.idade + " anos";
  }

  mostrarNome(lista:Animal){
    this.listaDetalis= lista.nome
  }

  removeAnimal(lista:Animal){
    console.log('Removendo animais...')
    this.animais = this.listService.remove(this.animais, lista);
  }

}
