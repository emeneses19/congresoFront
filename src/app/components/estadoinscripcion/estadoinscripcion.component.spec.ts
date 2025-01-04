import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoinscripcionComponent } from './estadoinscripcion.component';

describe('EstadoinscripcionComponent', () => {
  let component: EstadoinscripcionComponent;
  let fixture: ComponentFixture<EstadoinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoinscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
