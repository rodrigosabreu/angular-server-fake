import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";


@Injectable()
export class ProdutoService{


    constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "http://localhost:3000/";
    protected UrlServiceV2: string = "http://localhost:3000/";


    obterProd(): Observable<Produto[]>{
        var produtos = this.http.get<Produto[]>(this.UrlServiceV1 + "produtos"); 
        return produtos;
    }


    obterProd2(): Observable<Produto[]>{
        var produtos = this.http.get<Produto[]>(this.UrlServiceV2 + "produtos"); 
        return produtos;
    }


}