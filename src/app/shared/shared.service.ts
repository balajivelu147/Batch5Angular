import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly url = 'https://query1.finance.yahoo.com/v8/finance/chart/TCS.NS?region=IN&lang=en-IN&includePrePost=false&interval=2m&range=1d&corsDomain=in.finance.yahoo.com&.tsrc=finance';
  constructor(private httpClient: HttpClient) { }

  public sharedParameter = 'sharing between components';
  public sharedFunction() {
    console.log('service function has been called');
  }

  GetTCSData() {
   return this.httpClient.get<any>(this.url);
  }
  
}
