import { Component } from '@angular/core';

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html'
})
export class ServerComponent{//hacemos export para que la clase pueda ser accedida desde fuera

    serverId: number = 10;
    serverStatus: string = 'offline';

    getserverStatus() {
        return this.serverStatus;

    }

}