import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  sampleSubject = new Subject<number>();
  sampleSubject$ = this.sampleSubject as Observable<number>;

  constructor() { }

  addSampleSubject(text: number) {
    this.sampleSubject.next(text);
  }

  // getSampleSubject(): Observable<string> {
  // return this.sampleSubject$;
  // }


}
