import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RegexPattern } from 'src/app/shared/regexPattern';
import { tap, map, debounceTime, distinctUntilChanged, first, switchMap, take, takeWhile, takeUntil } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { FirstPageManualComponent } from '../first-page-manual/first-page-manual.component';
import { Observable, Subject } from 'rxjs';
import { SubjectService } from '../shared/subject.service';
import { ActivatedRoute } from '@angular/router';
import { UserResolver } from '../shared/guards/resolve.guard';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  userNameValidators: any = [Validators.required, Validators.maxLength(10), Validators.minLength(5)];
  submitted = false;
  authorize: FormArray;
  TCSdata: any;
  TCSdataAsync: Observable<any>;
  subjectValue: any;
  subjecttakeWhileValue;
  subjectTakeUntil;
  unsubscribe = new Subject<any>();
resolveVal: any;
  constructor(
    public sharedService: SharedService,
    public subjectService: SubjectService,
    public activatedRoute: ActivatedRoute
  ) {

    this.subjectService.addSampleSubject(7);
    this.subjectService.addSampleBehaviourSubject(7);
   }
  ngOnInit(): void {
    // this.updateFuelType();
this.resolveVal = this.activatedRoute.snapshot.data[0];
    this.sharedService.sharedFunction();
    console.log(this.sharedService.sharedParameter);
    // this.sharedService
    //   .GetTCSData()
    //   .pipe(
    //     first(),
    //     map(anyName => this.TCSdata = anyName) /// this is for mutation
    //     , tap(anyName => this.TCSdata = anyName) ///only for side effects
    //     /// its for stream of data, it will take last obsersved value
    //     /// we have 3 request, it will take last request and ignore the previous 2 requests
    //     , switchMap(anyName => this.TCSdata = anyName))
    //   .subscribe();

    this.TCSdataAsync = this.sharedService.GetTCSData();



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


    this.subjectService.sampleSubject$.pipe(
      take(4),
      map(x => this.subjectValue = x)
    )
      .subscribe();


    this.subjectService.sampleSubject$.pipe(
      map(x => this.subjecttakeWhileValue = x),
      takeWhile(x => x === 5), //once the value becomes false, it becomes cold observable
      map(x=> console.log(x)),
      // map(y  => console.log(( <= 15)))
    )
      .subscribe()


      this.subjectService.sampleSubject$.pipe(
        map(x => this.subjectTakeUntil = x),
        takeUntil(this.unsubscribe),
        map(x=> console.log(x)),
        // map(y  => console.log(( <= 15)))
      )
        .subscribe();


  }



  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getTCSInfo() {
    this.sharedService
      .GetTCSData()
      .pipe(
        take(3),
        map(anyName => this.TCSdata = anyName) /// this is for mutation
        , tap(anyName => this.TCSdata = anyName) ///only for side effects
        , tap(anyName => console.log(anyName)))
      .subscribe();

  }
  counter: number = 10;
  takeSample() {
    this.counter = this.counter - 1;
    this.subjectService.addSampleSubject(this.counter);
    this.subjectService.addSampleBehaviourSubject(this.counter);
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
