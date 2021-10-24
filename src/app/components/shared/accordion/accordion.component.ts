import {AfterContentInit, Component, ContentChildren, OnDestroy, QueryList} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import AccordionPanelComponent from './panel/accordion-panel.component';
import {PanelStyleEnum} from '../../../enums/panel-style.enum';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export default class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent>;

  private onDestroy$: Subject<void> = new Subject();

  ngAfterContentInit(): void {
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
      tempPanel.toggle.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
        this.openPanel(index);
      });
      return tempPanel;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private openPanel(selectedIndex: number): void {
    this.panels.map((panel: AccordionPanelComponent, index: number) => {
      const tempPanel = panel;
      tempPanel.opened = selectedIndex === index;
      return tempPanel;
    });
  }
}
