import { Component, input } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-listdragon-page',
  imports: [],
  templateUrl: './listdragon-page.html',
  styleUrl: './listdragon-page.css',
})
export class ListdragonPage {
  characters = input.required<Character[]>();
}
