import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadodeinscripcionComponent } from './estadodeinscripcion.component';

describe('EstadodeinscripcionComponent', () => {
  let component: EstadodeinscripcionComponent;
  let fixture: ComponentFixture<EstadodeinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadodeinscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadodeinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
