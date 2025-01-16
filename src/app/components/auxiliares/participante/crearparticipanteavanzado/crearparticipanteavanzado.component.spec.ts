import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearparticipanteavanzadoComponent } from './crearparticipanteavanzado.component';

describe('CrearparticipanteavanzadoComponent', () => {
  let component: CrearparticipanteavanzadoComponent;
  let fixture: ComponentFixture<CrearparticipanteavanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearparticipanteavanzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearparticipanteavanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
