import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spider-Man', 'Lobezno', 'Thor', 'Capitán América', 'Ironman'];
  public deletedHero?: string;

  removeLastHero() :void {
    this.deletedHero = this.heroNames.pop();
  }

}
