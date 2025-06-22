import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novedades',
  imports: [CommonModule],
  templateUrl: './novedades.html',
  styleUrl: './novedades.css'
})
export class Novedades {
  ntradas = [
    {
      id: 1,
      titulo: 'Nothing OS 3.0 ya disponible',
      fecha: '21 de junio de 2025',
      descripcion: 'La nueva actualización mejora el rendimiento de la cámara y la interfaz.',
      imagen: 'img/nothing-OS.webp'
    },
    {
      id: 2,
      titulo: 'Nothing Phone (3) se filtra',
      fecha: '15 de junio de 2025',
      descripcion: 'Nuevos rumores sobre diseño y Snapdragon de gama alta.',
      imagen: 'img/portada3.webp'
    },
    {
      id: 3,
      titulo: 'Nothing Ear (3) ya está aquí',
      fecha: '1 de junio de 2025',
      descripcion: 'Auriculares con mejor sonido y transparencia mejorada.',
      imagen: 'img/ear.jpg'
    }
  ];

  verMas(entrada: any) {
    alert(`📱 Detalle de entrada: ${entrada.titulo}`);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}
