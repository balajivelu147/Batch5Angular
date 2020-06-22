import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { RegexPattern } from 'src/app/shared/regexPattern';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  userNameValidators: any = [Validators.required, Validators.maxLength(10), Validators.minLength(5)];
  submitted = false;
  constructor() { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, this.customValidator]),
      password: new FormControl('',
        [Validators.pattern(RegexPattern.PASSWORD_STRENGTH),
        Validators.required, Validators.max(10)])
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      alert(JSON.stringify(this.loginForm.value));
    }
  }

  customValidator(control: any) {
    const val = control?.value;
  //  const isValidForm = this.loginForm?.valid;
    if (val !== '') {
      if (val.length < 5) {
        return {
          customlength: true
        };
      } else {
        return null;
      }
    }
    return null;
  }

  get f() {
    return this.loginForm.controls;
  }

}
