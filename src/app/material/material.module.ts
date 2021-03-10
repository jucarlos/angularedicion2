import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [],
  exports: [
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
