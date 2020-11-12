import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';
import {VilainService} from '../vilain.service';

@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {

  vilains : Vilain[] ;
  selectedVilain: Vilain;
  constructor (private vilainService : VilainService) { }
    ngOnInit(){
      this.vilains= this.vilainService.getVilains();
    }

    selectVilain(vilain: Vilain){
      this.selectedVilain= vilain;
    }
 


}
