import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

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
  imagen = '../../../assets/img/crear-usuario.jpg';
  estadosCiviles: any []=['Soltero', 'Casado', 'Divorsiado', 'Viudo']
  constructor() { }

  ngOnInit(): void {
  }

}
