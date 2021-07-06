import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  img ='../../../assets/img/crear-usuario.jpg'
  estadosCiviles: any []=['Soltero', 'Casado', 'Divorciado', 'Viudo'];
  idEmpleado:any;
  action = 'Crear';
  myForm : FormGroup;
  constructor(private fb:FormBuilder,
              private empleadoService: EmpleadoService,
              private route: Router,
              private snackBar:MatSnackBar,
              private aRoute: ActivatedRoute ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      genero: ['', [Validators.required]],
    });
    const idParam= 'id';
    this.idEmpleado = this.aRoute.snapshot.params[idParam];
   }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined){
      this.action = 'Editar'
      this.preEditar();
    }
  }
  guardarEmpleado(){
    const empleado: Empleado = {
      nombreCompleto: this.myForm.get('nombreCompleto').value,
      correo: this.myForm.get('correo').value,
      fechaIngreso: this.myForm.get('fechaIngreso').value,
      telefono: this.myForm.get('telefono').value,
      estadoCivil: this.myForm.get('estadoCivil').value,
      genero: this.myForm.get('genero').value
    };
    if(this.idEmpleado !== undefined ){
      this.editarEmpleado(empleado);
    }else{
      this.agregarEmpleado(empleado);
    };
  };
  agregarEmpleado(empleado:Empleado){
    this.empleadoService.agregarEmpleado(empleado);
    this.snackBar.open('El empleado fue registrado con exito', '', {
      duration:3000
    });
    this.route.navigate(['/']);
  }
  editarEmpleado(empleado:Empleado){
    this.empleadoService.editEmpleado(empleado, this.idEmpleado);
    this.snackBar.open('El empleado fue actualizado con exito!', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }
  preEditar(){
    const empleado: Empleado = this.empleadoService.getEmpleado(this.idEmpleado);
    console.log(empleado);
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      genero: empleado.genero,
    });
  }
}
