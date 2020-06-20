import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    alert(JSON.stringify(this.loginForm.value));
    if(true) {
      console.log('');
    }
  }

}
