import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-mcalificacion',
  templateUrl: './mcalificacion.component.html',
  styleUrls: ['./mcalificacion.component.css']
})
export class McalificacionComponent implements OnInit {

  public peliculas:any = [];
  private pagina = 1

  constructor(private _sp: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPcali();
  }

  obtenerPcali(){
    this._sp.mcalificaion(this.pagina).subscribe((resp:any)=>{
      this.peliculas = resp.results
    })
  }

}
