import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeerPaisService } from '../../leer-pais.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  controlLeer: Subscription;
  paises: any[];

  constructor(private leer: LeerPaisService) { }

  ngOnInit() {
    this.controlLeer = this.leer.leerApi().subscribe((data: any[]) => {
      console.log(data);
      this.paises = data.filter(pais => pais.population > 15000000);
    });
  }

  ngOnDestroy(): void {
    this.controlLeer.unsubscribe();
  }

}
