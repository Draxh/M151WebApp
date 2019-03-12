import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
  {
    path: 'addTask',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: AppComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
