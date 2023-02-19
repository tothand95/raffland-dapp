import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLvl4Component } from './fill-lvl4.component';

describe('FillLvl4Component', () => {
  let component: FillLvl4Component;
  let fixture: ComponentFixture<FillLvl4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLvl4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLvl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
