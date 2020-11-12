import { Component, OnInit, Input } from '@angular/core';
import Hero from '../types/hero.type';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
