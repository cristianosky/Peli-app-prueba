import { Component, OnInit} from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  

  constructor(private _sp: PeliculasService) { }

  ngOnInit(): void {
  }



}
