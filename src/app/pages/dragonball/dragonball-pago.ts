import { Component, computed, signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';
import { ListdragonPage } from '../listdragon/listdragon-page';

@Component({
  selector: 'app-dragonball-pago',
  imports: [ListdragonPage],
  templateUrl: './dragonball-pago.html',
  styleUrl: './dragonball-pago.css',
})
export class DragonballPago {

  personaje = signal<string>('Goku');
  poder = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6000 },
    { id: 5, name: 'Frieza', power: 12000 },
    { id: 6, name: 'Krillin', power: 500 },
  ]);

  addPersonaje() {
    if (!this.personaje() || !this.poder() || this.poder() <= 0)   return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.personaje(),
      power: this.poder(),
    };
    this.characters.update((characters) => [...characters, newCharacter]);

  }

  powerClasses = computed( () => {
    return {
      'text-danger': true,
    }
  });

}
