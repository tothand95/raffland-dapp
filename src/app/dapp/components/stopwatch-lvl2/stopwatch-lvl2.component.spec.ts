import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLvl2Component } from './stopwatch-lvl2.component';

describe('StopwatchLvl2Component', () => {
  let component: StopwatchLvl2Component;
  let fixture: ComponentFixture<StopwatchLvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchLvl2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchLvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
