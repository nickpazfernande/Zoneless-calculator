import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calculator-view',
  imports: [],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Use OnPush for better performance, zone-less change detection
})
export default class CalculatorViewComponent { }
