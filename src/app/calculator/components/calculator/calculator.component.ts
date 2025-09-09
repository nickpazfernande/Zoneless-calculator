import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .is-command {
  @apply bg-indigo-700 bg-opacity-20
  }

      .is-command:hover {
        @apply bg-indigo-700 bg-opacity-30
      }
    `
  ],
  host: {
    '(window:keydown)': 'handleKeyboardEvent($event)'
  }

})
export class CalculatorComponent {
  //ViewChild pero en plural, varios elementos
  //Es una señal para Angular de que queremos acceder a varios elementos hijos
  public calculatorButtons = viewChildren(CalculatorButtonComponent)


  handleClick(key: string) {
    console.log('Button clicked:', key);
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    //Equivalencias de teclas
    const keyEquivalents: Record<string, string> = {
      'Enter': '=',
      'Backspace': 'DEL',
      'c': 'C',
      'Escape': 'C',
      '*': 'X',
      'Clear': 'C',
      'Delete': 'DEL',
      '/': '÷',
    };

    const keyValue = keyEquivalents[event.key] ?? event.key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
      button.keyBoardPressedStyle(keyValue);
    });

  }
}
