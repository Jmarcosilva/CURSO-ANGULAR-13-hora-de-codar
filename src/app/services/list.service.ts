import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animais: Animal[], lista:Animal){
    return animais.filter((a) => lista.nome !== a.nome)
  }


}
