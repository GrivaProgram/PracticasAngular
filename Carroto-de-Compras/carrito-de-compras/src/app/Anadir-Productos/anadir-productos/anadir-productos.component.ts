import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Productos } from '../../interfaces/Productos';
import { ProductosComponent } from '../../productos/productos.component';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-anadir-productos',
  standalone: true,
  imports: [],
  templateUrl: './anadir-productos.component.html',
  styleUrl: './anadir-productos.component.css'
})
export class AnadirProductosComponent {
  //Capturar los productos
  _id: string  = '';
  nombre: string = '';
  descripcion: string = '';
  costo: number = 0;
   // Usar EventEmitter para enviar los datos al componente principal
   constructor(private productosService: ProductosService) {}
   agregarProducto() {
    const ProductoNuevo: Productos = {
      _id: this.generarIdTemporal(),
      nombre: this.nombre,
      descripcion: this.descripcion,
      costo: this.costo
    };
    this.productosService.agregarProducto(ProductoNuevo);
    this.nombre = '';
    this.descripcion = '';
    this.costo = 0;   
   }

   generarIdTemporal(): string {
    return Math.random().toString(36).substring(2, 9); // Genera un ID aleatorio
  }
   
}
