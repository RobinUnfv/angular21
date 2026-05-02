import { Component, output, signal } from '@angular/core';
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

  newCliente = output<ICliente>();

  registrar() {

    if(!this.nombre() || !this.edad() || this.edad() <= 0 ) return;

    const newCliente: ICliente = {
      id:  Math.floor(Math.random() * 1000),
      nombre: this.nombre(),
      edad: this.edad()
    };

    this.newCliente.emit(newCliente);
    this.formatearText();

  }

  formatearText() {
    this.nombre.set('');
    this.edad.set(0);
  }

}
