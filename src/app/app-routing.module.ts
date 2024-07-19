import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/// Angular Router First Step
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { PnfComponent } from './components/pnf/pnf.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200
  { path: 'home', component: HomeComponent }, // localhost:4200/home
  { path: 'about', component: AboutComponent }, // localhost:4200/about
  { path: 'admission', component: AdmissionComponent }, // localhost:4200/admission
  { path: '**', component: PnfComponent }, // wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
