import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBasadoPlantillaComponent } from './formulario-basado-plantilla.component';

describe('FormularioBasadoPlantillaComponent', () => {
  let component: FormularioBasadoPlantillaComponent;
  let fixture: ComponentFixture<FormularioBasadoPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBasadoPlantillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioBasadoPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
