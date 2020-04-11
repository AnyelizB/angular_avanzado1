import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: [
  ],
})
export class ProgessComponent implements OnInit {
  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  // actualizar(event: number){
  //   console.log('Evento: ' , event );
  //   this.progreso1 = event;
  // }

}
