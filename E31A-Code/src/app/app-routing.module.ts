import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TeamComponent } from './pages/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';
import { UserComponent } from './private/user/user.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

// const routes: Routes = [
//   { path: 'apartment/:id', component: ApartmentComponent, outlet: 'nav' },
//   { path: 'project/:id', component: ProjectComponent, outlet: 'nav' },
//   { path: 'project', component: ProjectComponent, outlet: 'nav' },
//   { path: 'contactus', component: ContactusComponent, outlet: 'nav' },
//   { path: 'aboutus', component: AboutusComponent, outlet: 'nav' },
//   { path: 'team', component: TeamComponent, outlet: 'nav' },
//   { path: 'home', component: HomeComponent, outlet: 'nav' },
//   { path: 'user', component: UserComponent, outlet: 'nav' },
//   { path: '', redirectTo: 'home', pathMatch: 'full', outlet: 'nav' },
// ];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'apartment/:id', component: ApartmentComponent },
      { path: 'project/:id', component: ProjectComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'user', component: UserComponent },
      { path: 'team', component: TeamComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
