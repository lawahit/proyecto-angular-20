import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';
import { ProductDetail } from '../../product-detail/product-detail';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetail],
  templateUrl: './products.html',
  styleUrls: ['./products.css'] // 👈 importante corregir esto (antes decía `styleUrl`)
})
export class Productos {
  productos: Product[] = [];
  modalVisible = false;
  productoSeleccionado!: Product;

  // ✅ Este es tu constructor
  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }

  // ✅ Método que se llama cuando haces clic en "Ver más"
  verMas(producto: Product) {
    this.productoSeleccionado = producto;
    this.modalVisible = true;
  }

  // ✅ Método que se llama para cerrar el modal
  cerrarModal() {
    this.modalVisible = false;
  }
  trackById(index: number, item: Product): number {
    return item.id;
  }
}




