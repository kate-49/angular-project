import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../catalog/product.model";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() productDetails!: IProduct;
  @Output() buy = new EventEmitter;
  getImageUrl(productDetails: IProduct) {
    if (!productDetails) return '';
    return '/assets/images/robot-parts/' + productDetails.imageName
  }
  buyButtonClicked(productDetails :IProduct) {
    this.buy.emit;
  }
}
