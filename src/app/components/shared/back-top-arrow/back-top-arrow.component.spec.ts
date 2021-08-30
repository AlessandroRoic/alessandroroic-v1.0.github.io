import {ComponentFixture, TestBed} from '@angular/core/testing';

import BackTopArrowComponent from './back-top-arrow.component';

describe('BackTopArrowComponent', () => {
  let component: BackTopArrowComponent;
  let fixture: ComponentFixture<BackTopArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackTopArrowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTopArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
