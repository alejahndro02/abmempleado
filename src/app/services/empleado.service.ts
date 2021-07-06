//Modulos
import { Injectable } from '@angular/core';
//modelo
import { Empleado } from 'src/app/models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[]=[
    { nombreCompleto:'Lucas martinez', correo:'mail@mail.com', fechaIngreso:new Date('05-25-2019'), telefono:1223331223, estadoCivil:'Casado', genero:'Masculino'},
    
    { nombreCompleto:'Lupita Rocilo', correo:'mail@mail.com', fechaIngreso:new Date('04-27-2020'), telefono:1223331223, estadoCivil:'Soltero', genero:'Femenino'},
    
    { nombreCompleto:'Jose Hernandez', correo:'mail@mail.com', fechaIngreso:new Date('07-25-2020'), telefono:2135654633, estadoCivil:'Casado', genero:'Masculino'},
    
    { nombreCompleto:'Rosa Abendaño', correo:'mail@mail.com', fechaIngreso:new Date('02-31-2020'), telefono:1223331223, estadoCivil:'Soltero', genero:'Femenino'},
    
    { nombreCompleto:'Bread Shon', correo:'mail@mail.com', fechaIngreso:new Date('01-31-2020'), telefono:2135654633, estadoCivil:'Viudo', genero:'Masculino'},
    
    { nombreCompleto:'Shan Chong', correo:'mail@mail.com', fechaIngreso:new Date('01-31-2020'), telefono:1223331223, estadoCivil:'Soltero', genero:'Femenino'},
    
    { nombreCompleto:'Rob Piwee', correo:'mail@mail.com', fechaIngreso:new Date('01-31-2020'),telefono:2135654633, estadoCivil:'Casado', genero:'Masculino'},
]
  constructor() { }
  getEmpleados(){
    return this.listEmpleado.slice();
  }
  eliminarEmpleado(index: number){
    this.listEmpleado.splice( index, 1 )
  }
  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift( empleado );
  }
  getEmpleado(index: number){
    return this.listEmpleado[ index ];
  }
  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].genero = empleado.genero;
  }
}
