import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";
import { CalculatorService } from '@/calculator/services/calculator.service';

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
  private calculatorService = inject(CalculatorService);
  //ViewChild pero en plural, varios elementos
  //Es una señal para Angular de que queremos acceder a varios elementos hijos
  public calculatorButtons = viewChildren(CalculatorButtonComponent)
  //Se puede usar get para acceder a las señales del servicio
  //Es la forma tradicional
  // get resultText() {
  //   return this.calculatorService.resultText();
  // }
  //Pero ahora con computed es más limpio
  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());


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
