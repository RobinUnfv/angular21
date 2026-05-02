import { Routes } from '@angular/router';
import { HeroPege } from './pages/hero/hero-pege';
import { Contador } from './pages/contador/contador';
import { CliCuePage } from './pages/cliente/cuerpo/cli-cue-page';

export const routes: Routes = [
  {
    path: '',
    component: Contador
  },
  {
    path: 'hero',
    component: HeroPege,
  },
  {
    path: 'cliente',
    component: CliCuePage,
  },
];
