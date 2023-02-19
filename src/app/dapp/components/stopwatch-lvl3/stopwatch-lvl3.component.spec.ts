import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLvl3Component } from './stopwatch-lvl3.component';

describe('StopwatchLvl3Component', () => {
  let component: StopwatchLvl3Component;
  let fixture: ComponentFixture<StopwatchLvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchLvl3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchLvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
