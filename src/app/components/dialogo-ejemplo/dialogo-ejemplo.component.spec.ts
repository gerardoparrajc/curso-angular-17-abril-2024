import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEjemploComponent } from './dialogo-ejemplo.component';

describe('DialogoEjemploComponent', () => {
  let component: DialogoEjemploComponent;
  let fixture: ComponentFixture<DialogoEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoEjemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
