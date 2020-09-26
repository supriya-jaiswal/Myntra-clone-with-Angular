import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  constructor() { }
  image:any;
  details:any;
  brand;
  totalPrice:number=0;
  description;
  item:any;
  cart=[];


  "items" = [
   {
     "id" : 1,
     "img":"/assets/images/jumpsuit1.jpg",
     "alt" : "Image 1",
     "brand": "Vishudh",
     "description": "Printed Basic Jumpsuit",
     "price": 650,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"

   },
   {
      "id" : 2,
     "img": "/assets/images/jumpsuit2.jpg",
     "alt" : "Image 2",
     "brand": "Libas",
     "description": "Solid Basic Jumpsuit",
     "price": 750,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
   },
   {
      "id" : 3,
     "img": "/assets/images/jumpsuit3.jpg",
     "alt" : "Image 3",
     "brand": "BerryLush",
     "description": "Printed Basic Jumpsuit",
     "price": 650,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
   },
   {
    "id" : 4,
     "img": "/assets/images/jumpsuit4.jpg",
     "alt" : "Image 4",
     "brand": "Kazo",
     "description": "Printed Basic Jumpsuit",
     "price": 780,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
   },
   {
    "id" : 5,
     "img": "/assets/images/jumpsuit5.jpg",
     "alt" : "Image 5",
     "brand": "Vishudh",
     "description": "Printed Basic Jumpsuit",
     "price": 750,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
   },
   {
     "id" : 6,
     "img": "/assets/images/jumpsuit6.jpg",
     "alt" : "Image 6",
     "brand": "Athena",
     "description": "Printed Basic Jumpsuit",
     "price": 560,
     "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
   },
   {
    "id" : 7,
    "img": "/assets/images/jumpsuit7.jpg",
    "alt" : "Image 7",
    "brand": "Vishudh",
    "description": "Printed Basic Jumpsuit",
    "price": 750,
    "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
  },
  {
    "id" : 8,
    "img": "/assets/images/jumpsuit8.jpg",
    "alt" : "Image 8",
    "brand": "Athena",
    "description": "Printed Basic Jumpsuit",
    "price": 560,
    "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
  },
  {
    "id" : 9,
    "img": "/assets/images/jumpsuit9.jpg",
    "alt" : "Image 9",
    "brand": "Marie Clarie",
    "description": "Printed Basic Jumpsuit",
    "price": 750,
    "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
  },
  {
    "id" : 10,
    "img": "/assets/images/jumpsuit10.jpg",
    "alt" : "Image 10",
    "brand": "BerryLush",
    "description": "Printed Basic Jumpsuit",
    "price": 560,
    "details": "Multicoloured striped basic jumpsuit, has a V-neck, sleeveless Comes with a fabric belt"
  }
 ]


  showImage(item){
    // for(let i=0; i<this.items.length;i++)
    // if(item.img == this.items[i].img)

    // this.image = this.items[i].img,
    // this.details = this.items[i].details,
    // this.brand = this.items[i].brand,
    // this.price = this.items[i].price,
    // this.description = this.items[i].description;
    this.item = item;

  }

  addToCart(item:any){
    let productExistInCart = this.cart
    .find(({id}) => id === item.id);
    if(!productExistInCart)


    this.cart.push(item);
    console.log(this.cart.length)

    return



    // this.totalItem=this.cart.length;
    // console.log(this.totalItem)
  }


  getCart(){

    return this.cart;
  }

  getPrice(){

    console.log(this.cart.length)
    for(let i=0; i<=this.cart.length;i++){
      console.log(this.cart[i].price)




      this.totalPrice = this.totalPrice + this.cart[i].price;

      console.log(this.totalPrice)
      return this.totalPrice



     }
  }

}
