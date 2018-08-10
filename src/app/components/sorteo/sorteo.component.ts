import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html'
})
export class SorteoComponent implements OnInit {

  numParticipantes: number;
  numGanadores: number;
  msg: string;
  mostrarError = false;

  constructor( ) { }

  ngOnInit() {
  }

  calcularGanadores (a: number, b: number) {
    this.numParticipantes = a;
    this.numGanadores = b;
    this.mostrarError = false;
    if (this.numGanadores > this.numParticipantes) {
     this.msg = `El número de ganadores ${ this.numGanadores } debe ser menor al número de participantes ${ this.numParticipantes }`;
     this.mostrarError = true;
    } else {
    }
  }

}
