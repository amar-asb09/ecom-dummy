import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticcsComponent } from './statisticcs.component';

describe('StatisticcsComponent', () => {
  let component: StatisticcsComponent;
  let fixture: ComponentFixture<StatisticcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
