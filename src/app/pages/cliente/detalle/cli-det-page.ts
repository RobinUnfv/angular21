import { Component, input } from '@angular/core';
import { ICliente } from '../../../interfaces/ICliente';

@Component({
  selector: 'app-cli-det-page',
  imports: [],
  templateUrl: './cli-det-page.html',
  styleUrl: './cli-det-page.css',
})
export class CliDetPage {
  //clientes = signal<ICliente[]>([{ id: 1, nombre: 'Robinzon Santana', edad: 37 }]);
  clientes = input.required<ICliente[]>();
}
