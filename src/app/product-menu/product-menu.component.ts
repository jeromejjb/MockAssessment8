import { Component, OnInit } from '@angular/core';
import { productService } from 'src/productService';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css'],
  providers: [productService]
})
export class ProductMenuComponent implements OnInit {
  allProducts: Product[] = [];


  constructor(public productService: productService) { 
    this.allProducts = this.productService.getAllProducts();
    console.log(this.allProducts);
  }


   //Called right before  content is displayed 
  ngOnInit(): void {
  }

}
