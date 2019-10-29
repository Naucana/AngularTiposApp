import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() {
    let obs = new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        const salida = {valor:contador}
        observer.next(salida);
        if (contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2){
        //   clearInterval(intervalo);
        //   observer.error('Mensaje Error');
        // }
      }, 1000)
    }).pipe(
      map(response => response.valor),
      filter((valor, index) => {
        console.log('Filter', valor, index);
        if (valor % 2 === 0) {
          return true;
        }
        return false;
      })
    );

    obs.pipe(retry(2));

    obs.subscribe(
      numero => console.log('Recibo', numero),
      error => console.log('Errores', error),
      () => console.log('Fin de observacion')
    );
  };

  ngOnInit() {
  }

}
