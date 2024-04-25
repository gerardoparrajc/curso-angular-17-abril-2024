import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNoEncontradaComponent } from './ruta-no-encontrada.component';

describe('RutaNoEncontradaComponent', () => {
  let component: RutaNoEncontradaComponent;
  let fixture: ComponentFixture<RutaNoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaNoEncontradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaNoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
