import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-list',
  standalone: false,
  templateUrl: './planta-list.component.html',
  styleUrl: './planta-list.component.css'
})
export class PlantaListComponent implements OnInit {
  
  plantas: Array<Planta> = [];

  constructor() { }

  ngOnInit(){ }

}
