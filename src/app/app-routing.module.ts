import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialToolbarStickyComponent } from './material-toolbar-sticky/material-toolbar-sticky.component';
import { StickheaderComponent } from './stickheader/stickheader.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'stickheader', component: StickheaderComponent},
  {path: 'mattoolbarsticky', component: MaterialToolbarStickyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
