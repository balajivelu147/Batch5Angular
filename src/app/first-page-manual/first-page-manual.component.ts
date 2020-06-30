import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  
  }


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
      alert(finalResult);
    }
    else {
      this.errorMessage = 'please fill the required fields';
    }
  }
}

// export interface cls {
//   update: string;
//   firstMethod(): string;
// }
