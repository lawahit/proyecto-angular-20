import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../services/products';
// Ajusta el path si está en otro lugar

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail {
  @Input() producto!: Product;
  @Output() close = new EventEmitter<void>();

  cerrar() {
    this.close.emit();
  }
}

