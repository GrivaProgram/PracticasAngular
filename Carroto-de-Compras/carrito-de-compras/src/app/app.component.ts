import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Productos } from './interfaces/Productos';
import { ProductosService } from './Services/productos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  productos: Productos[] = [];
  

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }
  title = 'carrito-de-compras';
}
