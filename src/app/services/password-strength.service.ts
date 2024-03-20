import { Injectable } from '@angular/core';
import { Regex } from '../../utils/common';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkStrength(p: string) {
    let force = 0;

    let flags = Regex(p);

    let passedMatches = 0;

    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    force += 2 * p.length + (p.length >= 10 ? 1 : 0);
    force += passedMatches * 10;

    force = p.length <= 8 ? Math.min(force, 10) : force;

    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;

    return force;
  }
}
