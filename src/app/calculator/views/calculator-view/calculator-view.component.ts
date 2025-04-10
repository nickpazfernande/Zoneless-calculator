import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "../../components/calculator/calculator.component";

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorComponent], //standalone components can be imported directly
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Use OnPush for better performance, zone-less change detection
})
export default class CalculatorViewComponent { }
