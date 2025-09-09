import { asNativeElements, Attribute, ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, OnInit, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '(window:keydown)': 'keyBoardPressedStyle($event)'

  },
  styleUrls: ['./calculator-button.component.css'],
})


export class CalculatorButtonComponent {
  public onClick = output<string>(); // Output signal to emit the button key when clicked
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  public isPressed = signal(false);

  //Input signals
  public isCommand = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value
    }
  });

  public isEqual = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value
    }
  });

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isEqual();
  }

  handleClick() {
    if (!this.contentValue()?.nativeElement) {
      return
    }

    const value = this.contentValue()!.nativeElement.innerText;
    this.onClick.emit(value.trim());
  }

  public keyBoardPressedStyle(key: string) {
    console.log('set key pressed style', key);
    if (!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if (value !== key) return

    this.isPressed.set(true);
    setTimeout(() => {
      this.isPressed.set(false);
    }, 200);
  }

}
