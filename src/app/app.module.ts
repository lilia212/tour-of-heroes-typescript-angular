import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { VilainsListComponent } from './vilains-list/vilains-list.component';
import { VilainsDetailsComponent } from './vilains-details/vilains-details.component';
import { VilainsEditComponent } from './vilains-edit/vilains-edit.component';
import { DigitalPrintComponent } from './digital-print/digital-print.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailsComponent,
    HeroEditComponent,
    VilainsListComponent,
    VilainsDetailsComponent,
    VilainsEditComponent,
    DigitalPrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
