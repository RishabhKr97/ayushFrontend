import { Pipe, PipeTransform } from '@angular/core';
import {Institute} from "./institute";

@Pipe({
  name: 'instiName'
})
export class InstiNamePipe implements PipeTransform {

  transform(value: Institute[], args: string): Institute[] {

    var filtered: Institute[] = [];

    if(args.length === 0)
      return value;

    var pattern = new RegExp(args + '+', 'i');
    for (const i of value){
      if (pattern.test(i.name))
        filtered.push(i);
    }
    return filtered;
  }
}
