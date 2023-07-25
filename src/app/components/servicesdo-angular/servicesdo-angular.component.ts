import { Component } from '@angular/core';

@Component({
  selector: 'app-servicesdo-angular',
  templateUrl: './servicesdo-angular.component.html',
  styleUrls: ['./servicesdo-angular.component.css']
})
export class ServicesdoAngularComponent {

  cidades = [
    {id:501, nomeDaCidade:"Betim", NumeroAbitantes:30000000, foto:"https://i0.wp.com/www.opuspesquisa.com/wp-content/uploads/2018/01/Pesquisa-de-Mercado-Betim.png?fit=617%2C404&ssl=1"},
    {id:502, nomeDaCidade:"Governador Valadares", NumeroAbitantes:10000000, foto:"https://www2.ufjf.br/noticias/wp-content/uploads/sites/2/2022/02/img_9444.jpg"},
    {id:503, nomeDaCidade:"Varzea da Palma", NumeroAbitantes:7000000, foto:"https://www.ferias.tur.br/thumbnail/4068/600/300/n_10603807_373196789511573_5665177260937957427_n.jpg"}
  ]

}
