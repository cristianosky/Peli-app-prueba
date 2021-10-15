import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  
  public peliculas:any = []
  private pagina = 1

  constructor(private _sp: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerpopulares()
  }

  obtenerpopulares(){
    this._sp.populares(this.pagina).subscribe((resp:any)=>{
      this.peliculas = resp.results
    })
  }

}
