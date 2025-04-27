import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  standalone: false,
  templateUrl: './planta-list.component.html',
  styleUrl: './planta-list.component.css'
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  ngOnInit(){  this.getPlantas();}

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.contarTipos();
    });
  }

  contarTipos(): void {
    this.totalInterior = this.plantas.filter(planta => planta.tipo.toLowerCase().trim() === 'interior').length;
    this.totalExterior = this.plantas.filter(planta => planta.tipo.toLowerCase().trim() === 'exterior').length;
  }
  

}
