import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DespregeoComponent } from './despregeo/despregeo.component';
//tot imi fac rute noi pt ca e ca si cum as avea nevoie de pagina noua , de exemplu am facut ruta noua pentru componenta
//de search bar , practic ma duc pe o alta pagina unde imi afiseaza doar bratara pe care am cautat-o 
const routes: Routes = [
  
{path:'', component:HomeComponent},//daca las gol numele de la path 
//imi afiseaza direct unde pun <router-outlet> fara sa caut cu /home

{path:'despregeorge', component:DespregeoComponent},

//
{path:'search/:searchTerm', component:HomeComponent}// path-ul este search/:(elementul pe care il caut) , se
//duce in homeComponent pentru ca acolo arat elementul cautat in search  
// , daca import HomeComponent si RoutedModule pot sa lucrez cu elemente din el in orice fisier ts
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
