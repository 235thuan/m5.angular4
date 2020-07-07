import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdowmTimerComponent } from './countdowm-timer.component';

describe('CountdowmTimerComponent', () => {
  let component: CountdowmTimerComponent;
  let fixture: ComponentFixture<CountdowmTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdowmTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdowmTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
