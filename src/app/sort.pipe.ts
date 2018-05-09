import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, target: any): any {
    const compare = (a, b) => {
      if (a[target] < b[target]) { return -1; }
      if (a[target] > b[target]) { return 1; }
      return 0;
    };
    value.sort(compare);
    return value;
  }
}
