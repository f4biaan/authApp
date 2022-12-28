import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test 1', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['1234546', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  login() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

  registro() {}
}
