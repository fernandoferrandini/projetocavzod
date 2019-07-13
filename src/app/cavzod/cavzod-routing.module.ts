import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CavzodsComponent} from './containers/cavzods/cavzods.component';
import {CavzodComponent} from './containers/cavzod/cavzod.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cavzods'},
  {path: 'cavzods', component: CavzodsComponent},
  {path: 'cavzod', component: CavzodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CavzodRoutingModule { }
