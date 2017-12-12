import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {

    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }
    const myPattern = new RegExp(value, 'i');
    return items.filter(it => it[field].match(myPattern));
  }

}





// if (items && items.length){
//   return items.filter(item =>{
//       if (brand && item.brand.indexOf(brand) === -1){
//           return false;
//       }
//       if (model && item.model.indexOf(model) === -1){
//           return false;
//       }
//       return true;
//  })
// }
// else{
//   return items;
// }
//   }
// }
