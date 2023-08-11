import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { Animais2ServiceService } from 'src/app/services/serviceAnimais2/animais2-service.service';

@Component({
  selector: 'app-aula19-item-detail',
  templateUrl: './aula19-item-detail.component.html',
  styleUrls: ['./aula19-item-detail.component.css']
})
export class Aula19ItemDetailComponent {
  animais2!: Animal;

  constructor(private animais2Service: Animais2ServiceService, private route: ActivatedRoute){
    this.getAnimal()
  }

  ngOnInit(){}

  getAnimal(){
    const id =Number (this.route.snapshot.paramMap.get("id"))
    this.animais2Service.getItem(id).subscribe((animais2) => (this.animais2 = animais2));
  }
}
