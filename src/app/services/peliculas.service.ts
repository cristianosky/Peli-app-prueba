import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlapi:string = "https://api-the-movie-nodejs.herokuapp.com/api/peliculas"
  // private urlapi:string ="http://localhost:3000/api/peliculas"

  constructor(private http:HttpClient) { }

  recientes(pagina:any){
    let url = `${this.urlapi}/recientes?page=${pagina}`;
    return this.http.get(url);
  }
  
  mcalificaion(pagina:any){
    let url = `${this.urlapi}/calificacion?page=${pagina}`;
    return this.http.get(url);
  }

  populares(pagina:any){
    let url = `${this.urlapi}/populares?page=${pagina}`;
    return this.http.get(url);
  }

  busqueda(datos:any, pagina:any){
    let data= {
      'buscar': datos
    }
    let url = `${this.urlapi}/buscar?page=${pagina}`;
    console.log(url, datos)
    return this.http.post(url, data);
  }

  pelicula(id:any){
    let url = `${this.urlapi}/pelicula/${id}`;
    return this.http.get(url);
  }
}
