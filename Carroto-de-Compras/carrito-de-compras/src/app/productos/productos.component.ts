import { Component, inject } from '@angular/core';
import { Productos } from '../interfaces/Productos';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule, MatDateSelectionModel } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AnadirProductosComponent } from '../Anadir-Productos/anadir-productos/anadir-productos.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,FormsModule,MatInputModule,FormsModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatSelectModule,MatButtonModule,MatIconModule
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  public dialog = inject(MatDialog)
  abrirModalAgregarProducto(){
    this.dialog.open(AnadirProductosComponent,{
      width:'50%'
    });
  }
    productos: Productos[] = [
      {
        _id: "1",
        nombre: "Laptop",
        descripcion: "Esta laptop es la mas barata",
        costo: 150,
      },
    ] ;
    agregarProducto(producto: Productos) {
      this.productos.push(producto);
    }

    constructor() {
      
    }
    
}
