import { Pipe, PipeTransform } from '@angular/core';
import {IInstitute} from "../institute.interface";


@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform{
  transform(value: IInstitute[], args: string): IInstitute[] {
    var filtered: IInstitute[] = []

    if(args.length === 0)
      return value;

    var pattern = new RegExp(args + '+', 'i');
    for (const i of value){
      if (pattern.test(i.name) )
        filtered.push(i);
    }
    return filtered;
  }
}
