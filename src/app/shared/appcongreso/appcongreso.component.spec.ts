import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcongresoComponent } from './appcongreso.component';

describe('AppcongresoComponent', () => {
  let component: AppcongresoComponent;
  let fixture: ComponentFixture<AppcongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppcongresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppcongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
