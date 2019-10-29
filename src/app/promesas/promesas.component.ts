import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.cuentaTres()
    .then( mensaje => console.log('Fin de la prueba', mensaje) )
    .catch(error => console.log('Error en la prueba', error) )
  }

  cuentaTres(): Promise<string>{
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        if (contador == 3){
          resolve('Todo bien');
          // reject('Error igual a 3');
          clearInterval(intervalo);
        }
      }, 1000)
    })
  }

  ngOnInit() {
  }

}
