import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearparticipanterapidoComponent } from './crearparticipanterapido.component';

describe('CrearparticipanterapidoComponent', () => {
  let component: CrearparticipanterapidoComponent;
  let fixture: ComponentFixture<CrearparticipanterapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearparticipanterapidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearparticipanterapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
