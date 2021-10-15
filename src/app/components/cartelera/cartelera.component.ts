import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  @Input('cartelera') peliculas: any;
  @Input('info') info :any;
  @Input('buscar') buscar :any;
  img = 'https://image.tmdb.org/t/p/w500';
  private paguina = 1
  showScrollHeight = 400;
  hideScrollHeight = 200;

  constructor(private _sp: PeliculasService) { }

  ngOnInit(): void {
  }

  addpeli(){
    this.paguina++
    if(this.info == 1){
      this._sp.recientes(this.paguina).subscribe((resp:any)=>{
        for(let i = 0; i < resp.results.length; i++){
          this.peliculas.push(resp.results[i])
        }
      })
    }else if(this.info == 2){
      this._sp.mcalificaion(this.paguina).subscribe((resp:any)=>{
        for(let i = 0; i < resp.results.length; i++){
          this.peliculas.push(resp.results[i])
        }
      })
    }else if(this.info == 3){
      this._sp.populares(this.paguina).subscribe((resp:any)=>{
        for(let i = 0; i < resp.results.length; i++){
          this.peliculas.push(resp.results[i])
        }
      })
    }else{
      this._sp.busqueda(this.paguina, this.buscar.buscar).subscribe((resp:any)=>{
        for(let i = 0; i < resp.results.length; i++){
          this.peliculas.push(resp.results[i])
        }
      })
      // console.log(this.buscar.buscar)
    }
    
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
    } else if ( (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
    }
  }

}
