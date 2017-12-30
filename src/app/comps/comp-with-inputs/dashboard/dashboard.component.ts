import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Router} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [
    {id: 1, name: 'dank', age: 50},
    {id: 2, name: 'carl', age: 60}
  ];

  constructor(private router: Router,
              private heroService: HeroService) {}

  gotoDetail(hero: Hero) {
    const url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }
}
