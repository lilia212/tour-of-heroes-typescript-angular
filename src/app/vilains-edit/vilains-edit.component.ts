import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vilains-edit',
  templateUrl: './vilains-edit.component.html',
  styleUrls: ['./vilains-edit.component.css']
})
export class VilainsEditComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
  }

}
