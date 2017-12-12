import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: Array<string>, value: string): any[] {

    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }
    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field[0]].match(myPattern) || it[field[1]].match(myPattern));
  }

}
