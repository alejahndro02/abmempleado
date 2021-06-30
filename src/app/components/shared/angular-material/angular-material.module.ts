import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports desde Angular material, estos se tinen que importar como  exportar desde el @NgModule
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule

  ], 
  exports:[
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
