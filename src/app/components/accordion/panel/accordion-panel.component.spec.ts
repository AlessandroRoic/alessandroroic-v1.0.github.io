import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccordionPanelComponent} from './accordion-panel.component';

describe('PanelComponent', () => {
  let component: AccordionPanelComponent;
  let fixture: ComponentFixture<AccordionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
