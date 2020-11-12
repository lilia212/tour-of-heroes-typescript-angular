import { Component, OnInit, Input } from '@angular/core';
import Vilain from '../types/vilain.type';

@Component({
  selector: 'app-vilains-details',
  templateUrl: './vilains-details.component.html',
  styleUrls: ['./vilains-details.component.css']
})
export class VilainsDetailsComponent implements OnInit {
  @Input() vilain: Vilain;
  constructor() { }

  ngOnInit() {
  }

}
