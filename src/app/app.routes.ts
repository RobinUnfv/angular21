import { Routes } from '@angular/router';
import { HeroPege } from './pages/hero/hero-pege';
import { Contador } from './pages/contador/contador';

export const routes: Routes = [
  {
    path: '',
    component: Contador
  },
  {
    path: 'hero',
    component: HeroPege,
  },
];
