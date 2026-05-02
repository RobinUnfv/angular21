import { Component, signal } from '@angular/core';
import { CliCabPage } from "../cabecera/cli-cab-page";
import { CliDetPage } from "../detalle/cli-det-page";
import { ICliente } from '../../../interfaces/ICliente';

@Component({
  selector: 'app-cli-cue-page',
  imports: [CliCabPage, CliDetPage],
  templateUrl: './cli-cue-page.html',
  styleUrl: './cli-cue-page.css',
})
export class CliCuePage {

  clientes = signal<ICliente[]>([]);

}
