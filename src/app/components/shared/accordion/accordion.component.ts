import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import AccordionPanelComponent from './panel/accordion-panel.component';
import { PanelStyleEnum } from '../../../enums/panel-style.enum';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export default class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent>;

  private subscriptions: Subscription[] = [];

  public ngAfterContentInit(): void {
    this.panels.map((panel: AccordionPanelComponent, index: number) => {
      const tempPanel = panel;
      if (index === 0) {
        tempPanel.buttonClass = PanelStyleEnum.FIRST;
        tempPanel.opened = true;
      } else if (index < this.panels.length - 1) {
        tempPanel.buttonClass = PanelStyleEnum.MIDDLE;
      } else {
        tempPanel.buttonClass = PanelStyleEnum.LAST;
      }
      this.subscriptions = [
        ...this.subscriptions,
        tempPanel.toggle.subscribe(() => {
          this.openPanel(index);
        }),
      ];
      return tempPanel;
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  private openPanel(selectedIndex: number): void {
    this.panels.map((panel: AccordionPanelComponent, index: number) => {
      const tempPanel = panel;
      tempPanel.opened = selectedIndex === index;
      return tempPanel;
    });
  }
}
