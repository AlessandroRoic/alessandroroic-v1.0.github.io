import {AfterContentInit, Component, ContentChildren, OnDestroy, QueryList} from '@angular/core';
import {AccordionPanelComponent} from './panel/accordion-panel.component';
import {Subscription} from 'rxjs';
import {PanelStyleEnum} from '../../enums/panel-style.enum';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent>;
  private subscriptions: Subscription[] = [];

  ngAfterContentInit(): void {
    this.panels[0].opened = true;
    this.panels.forEach((panel: AccordionPanelComponent, index: number) => {
      if (index === 0) {
        panel.buttonClass = PanelStyleEnum.FIRST;
      } else if (index < this.panels.length - 1) {
        panel.buttonClass = PanelStyleEnum.MIDDLE;
      } else {
        panel.buttonClass = PanelStyleEnum.LAST;
      }
      this.subscriptions = [
        ...this.subscriptions,
        panel.toggle.subscribe(() => {
          this.openPanel(panel);
        })
      ];
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  private openPanel(panel: AccordionPanelComponent): void {
    this.panels.forEach((p: AccordionPanelComponent) => p.opened = false);
    panel.opened = true;
  }
}
