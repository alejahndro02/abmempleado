//Modulos
import { Injectable } from '@angular/core';
//modelo
import { Empleado } from './../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[]=[
    { nombreCompleto:'Lucas martinez', telefono:1223331223, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Masculino'},
    
    { nombreCompleto:'Lupita Rocilo', telefono:1223331223, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Femenino'},
    
    { nombreCompleto:'Jose Hernandez', telefono:2135654633, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Masculino'},
    
    { nombreCompleto:'Rosa Abendaño', telefono:1223331223, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Femenino'},
    
    { nombreCompleto:'Bread Shon', telefono:2135654633, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Masculino'},
    
    { nombreCompleto:'Shan Chong', telefono:1223331223, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Femenino'},
    
    { nombreCompleto:'Rob Piwee', telefono:2135654633, correo:'mail@mail.com', 
    fechaIngreso:new Date(), estadoCivil:'soltero', genero:'Masculino'},
]
  constructor() { }
  getEmpleados(){
    return this.listEmpleado.slice();
  }
  eliminarEmpleado(index:number){
    this.listEmpleado.splice(index,1)
  }
  agregarEmpleado(empleado:Empleado){
    this.listEmpleado.unshift(empleado);
    // console.log(empleado);
    
  }
}
