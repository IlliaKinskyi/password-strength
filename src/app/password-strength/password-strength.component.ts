import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';
import { PasswordStrengthService } from '../services/password-strength.service';

interface IBar<T> {
  [key: string]: T;
}

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
})
export class PasswordStrengthComponent {
  @Input() public passwordToCheck: string | null | undefined = '';
  @Output() passwordStrength = new EventEmitter<boolean>();
  bar0: string = '';
  bar1: string = '';
  bar2: string = '';

  private colors = ['red', 'yellow', 'green'];

  constructor(private pass: PasswordStrengthService) {}

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;
    this.setBarColors(3, '#ddd');
    if (password) {
      const c = this.getColor(this.pass.checkStrength(password));
      this.setBarColors(c.index, c.col);

      const pwdStrength = this.pass.checkStrength(password);
      pwdStrength === 30
        ? this.passwordStrength.emit(true)
        : this.passwordStrength.emit(false);
    }
  }

  private getColor(s: number) {
    let index = 0;
    if (s <= 10) {
      index = 0;
    } else if (s <= 20) {
      index = 1;
    } else if (s <= 30) {
      index = 2;
    } else {
      index = 3;
    }
    return {
      index: index + 1,
      col: this.colors[index],
    };
  }

  private setBarColors(count: number, col: string) {
    for (let n = 0; n < count; n++) {
      (this as unknown as IBar<string>)['bar' + n] = col;
    }
  }
}
