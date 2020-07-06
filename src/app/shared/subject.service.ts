import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  sampleSubject = new Subject<number>();
  sampleSubject$ = this.sampleSubject as Observable<number>;

  sampleBehaviourSubject = new BehaviorSubject<number>(4);
  sampleBehaviourSubject$ = this.sampleBehaviourSubject as Observable<number>;

  sampleAsyncSubject = new AsyncSubject<number>();
  sampleAsyncSubject$ = this.sampleAsyncSubject as Observable<number>;

  sampleReplaySubject = new ReplaySubject<number>(10);
  sampleReplaySubject$ = this.sampleReplaySubject as Observable<number>;

  constructor() {
    this.addSampleSubject(5);
    this.addSampleBehaviourSubject(5);
  }

  addSampleSubject(text: number) {
    this.sampleSubject.next(text);
  }

  addSampleBehaviourSubject(text: number) {
    this.sampleBehaviourSubject.next(text);
  }

  addAsyncSampleSubject(text: number) {
    this.sampleAsyncSubject.next(text);
  }

  addAsyncCompleteSampleSubject() {
    this.sampleAsyncSubject.complete();
  }

  addReplaySampleSubject(text: number) {
    this.sampleReplaySubject.next(text);
  }

  // getSampleSubject(): Observable<string> {
  // return this.sampleSubject$;
  // }


}
