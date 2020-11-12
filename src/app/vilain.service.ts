import { Injectable } from '@angular/core';
import Vilain from './types/vilain.type';
@Injectable({
  providedIn: 'root'
})
export class VilainService {
    private vilains : Vilain[] = [
    {id:1, name :'Joker', power:'ruse'},
    {id:2, name :'Harley', power:'malice'},
    {id:3, name:'Darkside', power:'laser omega'},
    {id:4, name:'Gamora', power:'ruse'},
    

  ];
  getVilains(): Vilain[] {
    return this.vilains;
  }
  constructor() { }
}
