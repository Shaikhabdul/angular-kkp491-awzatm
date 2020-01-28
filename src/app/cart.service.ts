import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

items=[];
  constructor() { }


  addToCart(product)
  {
    console.log(product.name);
    this.items.push(product);
  }
getItems() {
  console.log(this.items)
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}