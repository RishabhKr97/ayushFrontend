import { Pipe, PipeTransform } from '@angular/core';
import {Doctor} from './doctor';
@Pipe({
  name: 'docName'
})
export class DocNamePipe implements PipeTransform {

  transform(value: Doctor[], arg1: string, arg2:boolean[]): Doctor[] {
              console.log('INSIDE PIPE YE!'+arg2);
    if(arg2.indexOf(true)===-1 || arg1.length===0){

      let filtered: Doctor[] = [];

      if(arg1.length === 0)
        return value;

      let pattern = new RegExp(arg1 + '+', 'i');
      for (const i of value){
        if (pattern.test(i.drName))
          filtered.push(i);
      }
      return filtered;
    }
    else{
      let filtered: Doctor[] = [];

      let pattern = new RegExp(arg1 + '+', 'i');
      for (const i of value){
        if (pattern.test(i.drName)){
          if(i.department==='Ayurveda' && arg2[0])
            filtered.push(i);
          if(i.department==='Yoga' && arg2[1])
            filtered.push(i);
          if(i.department==='Unnani' && arg2[2])
            filtered.push(i);
          if(i.department==='Siddha' && arg2[3])
            filtered.push(i);
          if(i.department==='Homepathy' && arg2[4])
            filtered.push(i)
        }
      }
      return filtered;
    }
  }
}
