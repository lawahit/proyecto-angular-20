import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: string;
  imagen: string;

  // Nuevos datos para el modal
  fabricante?: string;
  garantia?: string;
  peso?: string;
  color?: string;
  // lo que necesites
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'nothing phone 1',
      descripcion : 'Un smartphone con pantalla OLED de 6.55 pulgadas, procesador Snapdragon 778G+ y cámara dual de 50 MP.',
      precio: '5,999 $',
      imagen: '/img/nothing-phone-1-8.png',
      fabricante: 'Nothing Inc.',
      garantia: '2 años',
      peso: '180 g',
      color: 'Negro'
    },
    {
      id: 2,
      nombre: 'nothing phone 2',
      descripcion: 'Un smartphone con pantalla OLED de 6.7 pulgadas, procesador Snapdragon 8+ Gen 1 y cámara dual de 50 MP.',
      precio: '8,999 $',
      imagen: '/img/phone 2.webp'
    },
    {
      id: 3,
      nombre: 'nothing phone 2a limited edition',
      descripcion: 'Edición limitada del nothing phone 2 con un diseño exclusivo y características mejoradas.',
      precio: '5,999 $',
      imagen: '/img/phone2a.webp'
    },
   {
      id: 4,
      nombre: 'nothing phone 3a pro',
      descripcion: 'Un smartphone con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2 y cámara triple de 50 MP.',
      precio: '16,599 $',
      imagen: '/img/phone3.webp'
   },
   {
      id: 5,
      nombre: 'Nothing Phone 3a',
      descripcion: 'Un smartphone con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2 y cámara triple de 50 MP.',
      precio: '8,999 $',
      imagen: '/img/cmf.webp'
   },
   {
      id: 6,
      nombre: 'Cmf By Nothing Phone 1',
      descripcion: 'un smartphone con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2 y cámara triple de 50 MP.',
      precio: '7,900 $',
      imagen: '/img/cmf1.webp'
   },{
      id: 7,
      nombre: 'Cmf By Nothing Phone 2 pro',
      descripcion: 'un smartphone con pantalla AMOLED de 6.8 pulgadas, procesador Snapdragon 8 Gen 2 y cámara triple de 50 MP.',
      precio: '8,900 $',
      imagen: '/img/cmf2p.webp'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
  
}
