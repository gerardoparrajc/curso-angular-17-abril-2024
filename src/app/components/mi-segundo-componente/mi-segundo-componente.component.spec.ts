import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSegundoComponenteComponent } from './mi-segundo-componente.component';

describe('MiSegundoComponenteComponent', () => {
  let component: MiSegundoComponenteComponent;
  let fixture: ComponentFixture<MiSegundoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiSegundoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiSegundoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
