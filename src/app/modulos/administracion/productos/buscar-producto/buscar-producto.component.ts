import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

listadoRegistros: ModeloProducto[] = [];

  constructor(private productoservicio:ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

ObtenerListadoProductos(){
  this.productoservicio.ObtenerRegistros().subscribe((datos: ModeloProducto[])=>{
    this.listadoRegistros = datos;
    //alert(this.listadoRegistros)
  })

}

}
