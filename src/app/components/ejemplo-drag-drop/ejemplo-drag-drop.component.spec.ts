import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploDragDropComponent } from './ejemplo-drag-drop.component';

describe('EjemploDragDropComponent', () => {
  let component: EjemploDragDropComponent;
  let fixture: ComponentFixture<EjemploDragDropComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
