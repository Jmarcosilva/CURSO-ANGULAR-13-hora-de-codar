import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { Animais2ServiceService } from 'src/app/services/serviceAnimais2/animais2-service.service';

@Component({
  selector: 'app-aula19-item-detalhe',
  templateUrl: './aula19-item-detalhe.component.html',
  styleUrls: ['./aula19-item-detalhe.component.css']
})
export class Aula19ItemDetalheComponent {
  animale!: Animal;

  constructor(private animais2service: Animais2ServiceService, private route: ActivatedRoute){
    this.getAnimali()
  }

  getAnimali(){
    const id = Number( this.route.snapshot.paramMap.get("id"))
    this.animais2service.getItem(id).subscribe((animale) => (this.animale = animale) );
  }
}
