import { Pipe, PipeTransform } from '@angular/core';
import {IInstitute} from "../institute.interface";


@Pipe({
  name: 'locFilter'
})
export class LocFilterPipe implements PipeTransform{
  transform(value: IInstitute[], args: string): IInstitute[] {
    var filtered: IInstitute[] = [];

    if(args.length === 0)
      return value;

    var pattern = new RegExp(args + '+', 'i');
    for (const i of value){
      if (pattern.test(i.location))
        filtered.push(i);
    }
    console.log("location filter pipe is called");
    return filtered;
  }
}
