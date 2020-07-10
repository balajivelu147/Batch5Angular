import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../shared/subject.service';
import { map } from 'rxjs/operators';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';

@Component({
  selector: 'app-first-page-manual',
  templateUrl: './first-page-manual.component.html',
  styleUrls: ['./first-page-manual.component.scss']
})
export class FirstPageManualComponent implements OnInit {
  registrationYear;
  fuelType = 'diesel';
  title = 'sell your car';
  brand;
  model;
  errorMessage = '';
  isNoError: boolean;

  constructor(public subjectService: SubjectService) { }

  ngOnInit(): void {
    //   this.subjectService.addReplaySampleSubject(1);
    //   this.subjectService.addReplaySampleSubject(2);
    //   this.subjectService.addReplaySampleSubject(3);
    //   this.subjectService.addReplaySampleSubject(4);
    //   this.subjectService.addReplaySampleSubject(5);
    //   this.subjectService.addReplaySampleSubject(6);
    //   this.subjectService.addReplaySampleSubject(7);
    // this.readReplySubject();



    this.subjectService.addAsyncSampleSubject(1);
    this.readAsyncSubject();
    this.subjectService.addAsyncSampleSubject(2);
    this.readAsyncSubject();

    this.subjectService.addAsyncSampleSubject(3);
 
    this.readAsyncSubject();

    // this.subjectService.addAsyncCompleteSampleSubject();
    this.subjectService.addAsyncSampleSubject(4);
    this.subjectService.addAsyncCompleteSampleSubject();
    this.subjectService.addAsyncSampleSubject(5);
   
  }

  readAsyncSubject() {
    
    this.subjectService.sampleAsyncSubject$.pipe(
      map(x => console.log(x))
    ).subscribe()
  }


  // readReplySubject() {
  //   this.subjectService.sampleReplaySubject$.pipe(
  //     map(x => console.log(x))
  //   ).subscribe();
  // }


  updateFuelType(): void {
    this.fuelType = 'electric';
  }

  postAdd(): void {
    if (this.brand && this.model && this.fuelType && this.registrationYear) {
      const finalResult = `{
      "brand" = ${this.brand},
      "Model" = ${this.model},
      "fuelType" = ${this.fuelType},
      "YearOfRegistration" = ${this.registrationYear}
      }`;
      this.errorMessage = '';
      this.isNoError = true;
      alert(finalResult);
    }
    else {
      this.isNoError = false;
      this.errorMessage = 'please fill the required fields';
    }
  }
  canDeactivate(): boolean {
    
    return  this.isNoError;
  }
}



// export interface cls {
//   update: string;
//   firstMethod(): string;
// }
