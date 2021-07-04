import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from './../../services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {
  myForm : FormGroup;
  imagen = '../../../assets/img/crear-usuario.jpg';
  estadosCiviles: any []=['Soltero', 'Casado', 'Divorsiado', 'Viudo']
  constructor(private fb:FormBuilder, 
              private empleadoService: EmpleadoService) {
    this.myForm = this.fb.group({
      nombreCompleto : [''],
      correo : [''],
      fechaIngreso : [''],
      telefono : [''],
      estadoCivil : [''],
      genero : [''],
    });
   }

  ngOnInit(): void {
  }
  guardarEmpleado(){
    const empleado: Empleado= {
      nombreCompleto: this.myForm.get('nombreCompleto').value,
      correo: this.myForm.get('correo').value,
      fechaIngreso: this.myForm.get('fechaIngreso').value,
      telefono: this.myForm.get('telefono').value,
      estadoCivil: this.myForm.get('estadoCivil').value,
      genero: this.myForm.get('genero').value
    };
    this.empleadoService.agregarEmpleado(empleado);
  };
}
