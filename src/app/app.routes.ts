import { Routes } from '@angular/router';
import { HeroPege } from './pages/hero/hero-pege';
import { Contador } from './pages/contador/contador';
import { DragonballPago } from './pages/dragonball/dragonball-pago';
import { CliCuePage } from './pages/cliente/cuerpo/cli-cue-page';


export const routes: Routes = [
  {
    path: '',
    component: Contador
  },
  {
    path: 'hero',
    component: HeroPege
  },
  {
    path: 'dragonball',
    component: DragonballPago
  },
  {
    path: 'cliente',
    component: CliCuePage,
  },
];
