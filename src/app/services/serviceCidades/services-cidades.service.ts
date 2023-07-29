import { Injectable } from '@angular/core';
import { Cidades } from 'src/app/interfaces/Cidades';

@Injectable({
  providedIn: 'root'
})
export class ServicesCidadesService {

  constructor() { }

  remove(cidades:Cidades[], cidade:Cidades){
    return cidades.filter((a) => cidade.nomeDaCidade !== a.nomeDaCidade)
  }
}
