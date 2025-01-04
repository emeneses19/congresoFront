import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeestadoinscripcionComponent } from './listadeestadoinscripcion.component';

describe('ListadeestadoinscripcionComponent', () => {
  let component: ListadeestadoinscripcionComponent;
  let fixture: ComponentFixture<ListadeestadoinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadeestadoinscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadeestadoinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
