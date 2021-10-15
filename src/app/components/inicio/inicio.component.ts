import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public peliculas:any = [];
  public peliculasB:any = [];
  private paguina:any
  public buscador:boolean = false;
  tituloB:any;

  Form!:FormGroup

  constructor(private fb: FormBuilder, private _sp: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerpeli()
    this.paguina = 1
    this.formulario()
  }

  formulario(){
    this.Form = this.fb.group({
      buscar: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  obtenerpeli(){
    this._sp.recientes(this.paguina).subscribe((resp:any)=>{
      this.peliculas = resp.results
    })
  }  

  buscar(datos:any){
    if(datos.valid){
      this.buscador = !this.buscador
      this.tituloB = datos.value
      this._sp.busqueda(datos.value.buscar, this.paguina).subscribe((resp:any)=>{
        this.peliculasB = resp.results
      })
    }else{
      console.log("No pasar")
    }
  }

  cerrar(){
    this.peliculasB = []
    this.buscador = false
  }

}
