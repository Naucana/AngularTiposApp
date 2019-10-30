import { Component, OnInit } from '@angular/core';
import { LeerUsuariosService } from './leer-usuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios-github',
  templateUrl: './usuarios-github.component.html',
  styleUrls: ['./usuarios-github.component.css']
})
export class UsuariosGithubComponent implements OnInit {

  controlLeer: Subscription;
  users: any[];

  constructor(private leerUsers: LeerUsuariosService) { }

  ngOnInit() {
    this.controlLeer = this.leerUsers.leerGithub().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnDestroy(): void {
    this.controlLeer.unsubscribe();
  }

}