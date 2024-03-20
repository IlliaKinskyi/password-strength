import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  signupForm = new FormGroup({
    password: new FormControl<string>('', Validators.minLength(8)),
  });

  ngOnInit(): void {}

  title = 'pass';
}
