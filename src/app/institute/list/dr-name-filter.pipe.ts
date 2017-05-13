import { Pipe, PipeTransform } from '@angular/core';
import {IInstitute} from "../institute.interface";

@Pipe({
  name: 'drNameFilter'
})
export class DrNameFilterPipe implements PipeTransform {
  transform(value: IInstitute[], args: string): IInstitute[] {
    var filtered: IInstitute[] = [];
    if(args.length === 0)
      return value;

    var pattern = new RegExp(args + '+', 'i');

    for (const i of value){
      var flag:boolean=false;
      for (const s of i.services){
        for(const d of s.doctors){
          if(pattern.test(d.name)){
            filtered.push(i);
            flag = true;
            break;
          }
        }
        if(flag)break;
      }
    }
    return filtered;
  }
}
