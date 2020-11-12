import { Injectable } from '@angular/core';
import Hero from './types/hero.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put<any>(this.heroesUrl, hero, httpOptions);
  }
}
