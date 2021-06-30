import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports desde Angular material, estos se tinen que importar como  exportar desde el @NgModule
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule

  ], 
  exports:[
    MatToolbarModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
