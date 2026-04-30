import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-pege',
  imports: [],
  templateUrl: './hero-pege.html',
  styleUrl: './hero-pege.css',
})
export class HeroPege {


  name = signal('Robinzon Santana');
  age = signal(37);

  heroDescripcion = computed(() => `${this.name()} tiene ${this.age()} años.`);

  changeHero() {
    this.name.set('Superman');
    this.age.set(80);
  }

  resetForm() {
    this.name.set('Robinzon Santana');
    this.age.set(37);
  }

  changeAge() {
    this.age.set(50);
  }


}
