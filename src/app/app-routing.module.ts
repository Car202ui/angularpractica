import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { Pages404Component } from './pages/pages404/pages404.component';
import { PagesComponent } from './pages/pages.component';

const routes:Routes=[
  {
    path:'',component:PagesComponent,
    //RUTAS HIJAS
    children:[
      {path: 'dashboard',component: DashboardComponent},
      {path: 'progress',component: ProgressComponent},
      {path: 'grafica1',component: Grafica1Component},
      {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
    ]
  },
  {path: 'registro',component: RegistroComponent},
  {path: 'login',component: LoginComponent},
  {path: '**',component: Pages404Component}

]




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
