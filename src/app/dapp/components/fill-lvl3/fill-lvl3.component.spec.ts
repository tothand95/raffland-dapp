import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLvl3Component } from './fill-lvl3.component';

describe('FillLvl3Component', () => {
  let component: FillLvl3Component;
  let fixture: ComponentFixture<FillLvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLvl3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
