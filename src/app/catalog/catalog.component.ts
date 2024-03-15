import { Component } from '@angular/core';
import {IProduct} from "./product.model";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description: "A robot you should buy",
      name: "Friendly bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2
    };
  }
}
