import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentIssuesComponent } from './current-issues.component';

describe('CurrentIssuesComponent', () => {
  let component: CurrentIssuesComponent;
  let fixture: ComponentFixture<CurrentIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
