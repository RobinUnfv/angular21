import { Component } from '@angular/core';
import { CliCabPage } from "../cabecera/cli-cab-page";
import { CliDetPage } from "../detalle/cli-det-page";

@Component({
  selector: 'app-cli-cue-page',
  imports: [CliCabPage, CliDetPage],
  templateUrl: './cli-cue-page.html',
  styleUrl: './cli-cue-page.css',
})
export class CliCuePage {}
