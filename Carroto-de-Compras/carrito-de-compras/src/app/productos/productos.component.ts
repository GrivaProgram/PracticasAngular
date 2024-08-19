import { Component, inject } from '@angular/core';
import { Productos } from '../interfaces/Productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    productos: Productos[] = [
      {
        _id: "1",
        nombre: "Laptop",
        descripcion: "Esta laptop es la mas barata",
        costo: 150,
      },
    ] ;
    productos1 : Productos = {
      _id:"1",
      nombre: "Laptop",
      descripcion: "Esta laptop es la mas barata",
      costo: 150,
    };

    constructor() {
      this.productos.push(this.productos1);
    }
    
}
