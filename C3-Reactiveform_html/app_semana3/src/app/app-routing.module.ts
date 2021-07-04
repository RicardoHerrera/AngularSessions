import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './access/login/login.component';

const routes: Routes = [
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'home', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}