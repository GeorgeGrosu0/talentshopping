import { Component ,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

foods:Food[] = []; //am declarat ca string  pe foods, unde am sa bag imaginike?'

  constructor(private foodService:FoodService , private route:ActivatedRoute) { }//INJECTEZ Foodservice-ul
  // foodService , si apoi si ActivatedRoute prin route 

ngOnInit(): void{
this.route.params.subscribe(params =>{  //Aici, se utilizează subscribe pentru a asculta schimbările 
  //în parametrii rutei  Atunci când parametrii rutei sunt modificați (de exemplu, atunci când se schimbă searchTerm în URL), funcția 
  //din interiorul subscribe este apelată.
  //subscribe=de fiecare data cand se schimba cv anunt params si pun in params
//cand se schimba ceva pun in params si params face urmatoarele:

if (params.searchTerm) {
  this.foods = this.foodService.getAll().filter(food => //imi punde elementele cu litere mici in foods
    food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));//pe care il afisez in Home.Component.HTML
} else //daca nu , ia toate elementele si le afiseaza 
  this.foods = this.foodService.getAll();//cu get all 


}

)
  

}

}

