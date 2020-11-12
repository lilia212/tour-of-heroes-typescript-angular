import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VilainsListComponent } from './vilains-list/vilains-list.component';
import { VilainsEditComponent } from './vilains-edit/vilains-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VilainsListComponent
  },
  {
    path: 'edit/:id',
    component: VilainsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
