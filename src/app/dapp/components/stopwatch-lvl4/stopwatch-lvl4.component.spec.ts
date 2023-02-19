import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchLvl4Component } from './stopwatch-lvl4.component';

describe('StopwatchLvl4Component', () => {
  let component: StopwatchLvl4Component;
  let fixture: ComponentFixture<StopwatchLvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchLvl4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchLvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
