export class Food{ // export clasa Food care va avea proprietatile://

id!: number; //  !=trebuie sa am neaparat in proprietatile imaginii(accesoriului_)  
name!:string;
price!:number;
tags?:string[];// ?=nu e neapparat sa am in proprietatile imaginii
favorite:boolean = false;
stars:number = 0;
imageUrl!:string;

cookTime!:string;
}