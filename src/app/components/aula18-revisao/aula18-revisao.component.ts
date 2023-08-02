import { Component } from '@angular/core';
import { ProdutosAmericanasService } from 'src/app/services/produtosAmericanas/produtos-americanas.service';

@Component({
  selector: 'app-aula18-revisao',
  templateUrl: './aula18-revisao.component.html',
  styleUrls: ['./aula18-revisao.component.css']
})
export class Aula18RevisaoComponent {


  produtosAmericanas=[
    {id:5001, nome:"Prato de louça", preco:"20.00", "foto":"https://images-americanas.b2w.io/produtos/01/00/img/202828/6/202828691_1GG.jpg"},
    {id:5002, nome:"Copo térmico", preco:"10.00", "foto":"https://779028l.ha.azioncdn.net/img/2022/11/produto/14574/copo-termico-cerveja-c-tampa-stanley-matte-black.jpg?ims=fit-in/490x490/filters:fill(white)"}
  ]

  

}
