import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import Hero from '../types/hero.type';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id).subscribe((hero: Hero) => this.hero = hero);
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(() => '' /*this.router.navigate(['/'])*/);
  }

  goBack() {
    this.location.back();
  }
}
