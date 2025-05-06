import { Attribute, ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  },
  styleUrls: ['./calculator-button.component.css'],
})


export class CalculatorButtonComponent {
  //Input signals
  public isCommand = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value
    }
  });

  @HostBinding('class.is-command') get commandStyle() {
    return this.isCommand();
  }
}
