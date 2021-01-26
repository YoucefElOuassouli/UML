import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainvoyageComponent } from './trainvoyage.component';

describe('TrainvoyageComponent', () => {
  let component: TrainvoyageComponent;
  let fixture: ComponentFixture<TrainvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainvoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
