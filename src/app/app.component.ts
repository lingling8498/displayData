import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1> {{ title }} </h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public myHero: string;
  public heroes = [];

  constructor(){
    this.title = 'Tour of Heroes';
    
    //this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Magneta'),
      new Hero(4, 'Tornado'),
    ]
    this.myHero = this.heroes[0];
  }
}
