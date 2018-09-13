import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersDetailsComponent } from './cutomers-details.component';

describe('CutomersDetailsComponent', () => {
  let component: CutomersDetailsComponent;
  let fixture: ComponentFixture<CutomersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
