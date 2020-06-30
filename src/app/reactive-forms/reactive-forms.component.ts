import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RegexPattern } from 'src/app/shared/regexPattern';
import { tap, map, debounceTime, distinctUntilChanged, first, switchMap } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { FirstPageManualComponent } from '../first-page-manual/first-page-manual.component';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  userNameValidators: any = [Validators.required, Validators.maxLength(10), Validators.minLength(5)];
  submitted = false;
  authorize: FormArray;
  TCSdata: any;
  constructor(
    private sharedService: SharedService
  ) { }
  ngOnInit(): void {
    // this.updateFuelType();
    this.sharedService.sharedFunction();
    console.log(this.sharedService.sharedParameter);
    this.sharedService
      .GetTCSData()
      .pipe(
        first(),
        map(anyName => this.TCSdata = anyName) /// this is for mutation
        , tap(anyName => this.TCSdata = anyName) ///only for side effects
        /// its for stream of data, it will take last obsersved value
        /// we have 3 request, it will take last request and ignore the previous 2 requests
        , switchMap(anyName => this.TCSdata = anyName))
      .subscribe();
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, this.customValidator]),
      password: new FormControl('',
        [Validators.pattern(RegexPattern.PASSWORD_STRENGTH),
        Validators.required, Validators.max(10)]),
      authorization: new FormArray([])
    });

    // this.loginForm.get('authorization')

    // this.f.userName.statusChanges.pipe(
    //   map(isValid => console.log(isValid)), //IF YOU MUTATE
    //   tap(isValid2 => console.log(isValid2)) // IF YOU WANT TO JUST CONSUME
    // ).subscribe();

    this.onUsertypes('dfgdfgdf');

  }

  addItem(): void {
    const rawJson = new FormGroup({ authority: new FormControl(''), author: new FormControl('sdfsdfsd') });
    this.authorize = this.loginForm.get('authorization') as FormArray;
    this.authorize.push(rawJson);
    this.onUsertypes('dfgdfgdf', true);
  }

  removeItem(i): void {
    this.authorize = this.loginForm.get('authorization') as FormArray;
    this.authorize.removeAt(i);
  }

  onUsertypes(typedValue: any, isTyped: boolean = true) {
    this.f.userName.valueChanges.pipe(
      debounceTime(500), // waits for 200 ms
      distinctUntilChanged(),
      map(isValid => console.log(isValid)), //IF YOU MUTATE
    ).subscribe();
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
