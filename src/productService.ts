import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class productService {
    inventory: Product[] = [];
    constructor() {
        let p: Product = {name: "Grey Tshirts", price: 11.99, productId: 'grey' }
        this.inventory.push(p);
        let p1: Product = {name: "Black Tshirts", price: 11.99, productId: 'black' }
        this.inventory.push(p1);
        let p2: Product = {name: "White Tshirts", price: 11.99, productId: 'white' }
        this.inventory.push(p2);
        let p3: Product = {name: "Navy Tshirts", price: 11.99, productId: 'navy' }
        this.inventory.push(p3);
        let p4: Product = {name: "Green Tshirts", price: 11.99, productId: 'green' }
        this.inventory.push(p4);
    }

    getAllProducts(): Product[] {
        console.log(this.inventory);
        return this.inventory;
    }
    
}