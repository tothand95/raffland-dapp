import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLvl5Component } from './stopwatch-lvl5.component';

describe('StopwatchLvl5Component', () => {
  let component: StopwatchLvl5Component;
  let fixture: ComponentFixture<StopwatchLvl5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchLvl5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchLvl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
