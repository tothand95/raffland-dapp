import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLvl1Component } from './fill-lvl1.component';

describe('FillLvl1Component', () => {
  let component: FillLvl1Component;
  let fixture: ComponentFixture<FillLvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLvl1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
