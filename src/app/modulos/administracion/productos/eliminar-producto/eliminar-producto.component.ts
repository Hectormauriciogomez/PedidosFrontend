import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  id: string = '';
  fbValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]], 
    'precio': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]
  } );
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }
  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: any) =>{
      this.fbValidador.controls["id"].setValue(this.id);
      this.fbValidador.controls["nombre"].setValue(datos.nombre);
      this.fbValidador.controls["precio"].setValue(datos.precio);
      this.fbValidador.controls["imagen"].setValue(datos.imagen);
    });
  }

}
