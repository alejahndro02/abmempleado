//Modelo
import { Empleado } from './../../models/empleado';
//Servicio
import { EmpleadoService } from './../../services/empleado.service';
//Modulos
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'telefono', 'correo', 'fechaIngreso', 'estadoCivil', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource();
  listEmpleado: Empleado[];
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  constructor(private empleadoService: EmpleadoService, 
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cargarEmpleados(){
    this.listEmpleado =this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminarEmpleado(index:number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Estas seguro que desea eliminar el empleado'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this.empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
      }
    });
  }
}
