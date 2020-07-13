import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private sharedService: SharedService) {}

  resolve(): Observable<any> {
    return this.sharedService.GetTCSData();
  }
}