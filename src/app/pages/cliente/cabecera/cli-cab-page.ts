import { Component, signal } from '@angular/core';
import { ICliente } from '../../../interfaces/ICliente';

@Component({
  selector: 'app-cli-cab-page',
  imports: [],
  templateUrl: './cli-cab-page.html',
  styleUrl: './cli-cab-page.css',
})
export class CliCabPage {


  nombre = signal<string>('');
  edad = signal<number>(0);

  clientes = signal<ICliente[]>([{id: 1, nombre: 'Robinzon Santana', edad: 37 }]);

  registrar() {

    if(!this.nombre() || !this.edad() || this.edad() <= 0 ) return;

    const newCliente: ICliente = {
      id: 2,
      nombre: 'GENESIS DE LA CRUZ',
      edad: 36
    };

    this.clientes.update( (cli) => [...cli, newCliente] )
    this.formatearText();

  }

  formatearText() {
    this.nombre.set('');
    this.edad.set(0);
  }

}
