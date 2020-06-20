import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  formsModel: any = {};
  // registrationYear;
  // fuelType = 'diesel';
   title = 'sell your car';
  // brand;
  // model;
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {

  }

  updateFuelType(): void {
    this.formsModel.fuelType = 'electric';
  }

  postAdd(): void {
  //  const finalResult = `{
  //     "brand" = ${this.formsModel.brand},
  //     "Model" = ${this.formsModel.model},
  //     "fuelType" = ${this.formsModel.fuelType},
  //     "YearOfRegistration" = ${this.formsModel.registrationYear}
  //     }`;
   alert(JSON.stringify(this.formsModel));
  }
}
