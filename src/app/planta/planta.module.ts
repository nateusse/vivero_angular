import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlantaListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PlantaListComponent
  ],
})
export class PlantaModule { }
