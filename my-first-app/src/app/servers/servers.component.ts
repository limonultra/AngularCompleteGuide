import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';

  constructor() { //función que se ejecuta en el momento que el componente es creado por Angular 

    setTimeout(() => { 

      this.allowNewServer = true;

    }, 2000) //A lsos 2 segundos quiero ejecutar la función flecha
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

}
