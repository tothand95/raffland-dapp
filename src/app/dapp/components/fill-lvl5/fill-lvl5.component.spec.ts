import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillLvl5Component } from './fill-lvl5.component';

describe('FillLvl5Component', () => {
  let component: FillLvl5Component;
  let fixture: ComponentFixture<FillLvl5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillLvl5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillLvl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
