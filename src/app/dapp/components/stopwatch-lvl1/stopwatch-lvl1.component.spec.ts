import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLvl1Component } from './stopwatch-lvl1.component';

describe('StopwatchLvl1Component', () => {
  let component: StopwatchLvl1Component;
  let fixture: ComponentFixture<StopwatchLvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchLvl1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchLvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
