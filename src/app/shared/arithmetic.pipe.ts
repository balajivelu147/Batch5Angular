import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arithmetic'
})
export class ArithmeticPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // var arr1 = [1,2,3];
    // var arr2 = [...arr1, 4, 5, 6]
    return value*2;
  }

}
