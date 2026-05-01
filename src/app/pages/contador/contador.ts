import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

    numero = signal<number>(0);

    disminuir() {
      let dis = this.numero();
      dis -= 1;
      this.numero.set(dis);
    }


    ingrementar() {
      let ing = this.numero();
      ing += 1;
      this.numero.set(ing);
    }

}
