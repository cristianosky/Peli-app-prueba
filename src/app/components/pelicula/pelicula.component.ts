import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  img = 'https://image.tmdb.org/t/p/w500';
  public peli:any=[]

  constructor(private route: ActivatedRoute, private _sp: PeliculasService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.getpelicula(id);
    
  }

  getpelicula(id:any){
    this._sp.pelicula(id).subscribe((resp:any)=>{
      this.peli = resp
      console.log(this.peli)
    })
  }
}
