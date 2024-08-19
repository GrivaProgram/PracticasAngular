import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productosSubject = new BehaviorSubject<Productos[]>([]);
  productos$ = this.productosSubject.asObservable();

  agregarProducto(producto: Productos) {
    const productos = this.productosSubject.getValue();
    this.productosSubject.next([...productos, producto]);
  }

  constructor() { }
}
