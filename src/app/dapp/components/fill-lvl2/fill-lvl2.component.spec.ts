import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLvl2Component } from './fill-lvl2.component';

describe('FillLvl2Component', () => {
  let component: FillLvl2Component;
  let fixture: ComponentFixture<FillLvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLvl2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
