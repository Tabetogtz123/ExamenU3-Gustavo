import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    
   path:  'heroes',
    component: HeroesComponent, 
  

  },
  {
    path:  'about',
    component: AboutComponent, 
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
