import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Planta } from '../planta';
import { PlantaListComponent } from './planta-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantaListComponent],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    component.plantas = [
      new Planta(7, 'Aloe Vera', 'Aloe barbadensis miller', 'Interior', 'Cálido', 'url1', 'Planta suculenta usada en medicina natural.'),
      new Planta(8, 'Planta del Dinero', 'Plectranthus verticillatus', 'Interior', 'Templado', 'url2', 'Planta popular en interiores por su asociación con la buena fortuna.'),
      new Planta(9, 'Romero', 'Salvia rosmarinus', 'Exterior', 'Templado', 'url3', 'Arbusto aromático usado en gastronomía y medicina.')
    ];
    fixture.detectChanges();
  });

  it('should create the table with 3 rows plus header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tbodyRows = compiled.querySelectorAll('tbody tr');
    expect(tbodyRows.length).toBe(3);
    const header = compiled.querySelectorAll('thead tr th');
    expect(header.length).toBe(4); 
  });
});
