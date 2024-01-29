import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})


export class FoodService {

  constructor() { }

 // getAll(): string[] {  //jvhgvghvhgvhgvhgc
    //hjbjh
    //return [
  //    '/assets/imagess/food-2.jpg',
  //    'assets/imagess/food-1.jpg',
 //     'assets/imagess/po3.jpg',
   //   'assets/imagess/po4.jpg',
  //    'assets/imagess/po5.jpg',
  //    'assets/imagess/po.webp'
  //  ];
 // }



getAll():Food []{ //functie care imi returneaza proprietatile imaginilor + imaginile(adica de tipul Food)

return[
  
  { 
    id:1,
    name:'☃️ Om de zapada ☃️',
    cookTime:'2-3 zile',
    favorite:false,
    price:15,
    stars:3.5,
    imageUrl:'/assets/imagess/deco1.jpeg',
    
    

  }
,
  { 
    id:2,
    name:'ghetuta festiva',
    cookTime:'2-3 zile',
    favorite:true,
    price:2,
    stars:4.2,
    imageUrl:'/assets/imagess/deco2.jpeg',
    
    

  }
,
  { 
    id:1,
    name:'renul lui mos Craciun',
    cookTime:'2-3 zile',
    favorite:false,
    price:6,
    stars:2.6,
    imageUrl:'/assets/imagess/deco3.jpeg',
    
    

  }
,
{ 
  id:1,
  name:'Acadea',
  cookTime:'2-3 zile',
  favorite:false,
  price:10,
  stars:4.9,
  imageUrl:'/assets/imagess/deco4.jpeg',
  
  

},
{ 
  id:1,
  name:'pachet ren + brad :)',
  cookTime:'2-3 zile',
  favorite:false,
  price:20,
  stars:5,
  imageUrl:'/assets/imagess/deco5.jpeg',
  
  

},
{ 
  id:1,
  name:'coroana festiva',
  cookTime:'2-3 zile',
  favorite:false,
  price:23,
  stars:3.7,
  imageUrl:'/assets/imagess/deco1.jpeg',
  
  

}
  
]

}
  }
