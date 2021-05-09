import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'  
})


export class ListaProdutoComponent {
  http: any;


  constructor(private produtoService: ProdutoService){}

  public produtos: Produto[];  

  ngOnInit(){

    this.produtoService.obterProd2()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          //console.log(produtos);
        },
        error => console.log(error)
      );


  }



}
