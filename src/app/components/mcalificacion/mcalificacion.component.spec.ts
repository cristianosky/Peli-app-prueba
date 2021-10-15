import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalificacionComponent } from './mcalificacion.component';

describe('McalificacionComponent', () => {
  let component: McalificacionComponent;
  let fixture: ComponentFixture<McalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
