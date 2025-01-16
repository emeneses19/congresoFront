import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaparticipanteComponent } from './listaparticipante.component';

describe('ListaparticipanteComponent', () => {
  let component: ListaparticipanteComponent;
  let fixture: ComponentFixture<ListaparticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaparticipanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaparticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
