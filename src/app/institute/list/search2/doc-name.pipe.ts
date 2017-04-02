import { Pipe, PipeTransform } from '@angular/core';
import {Doctor} from './doctor';
@Pipe({
  name: 'docName'
})
export class DocNamePipe implements PipeTransform {
  transform(value: Doctor[], arg1: string , f0:boolean, f1:boolean, f2:boolean, f3:boolean, f4:boolean): Doctor[] {
              console.log('INSIDE PIPE YEe!');

    let arg2:boolean[]=[f0,f1,f2,f3,f4];

              console.log(arg2);

    if(arg1.length===0 && arg2.indexOf(true)===-1){
      console.log('returning all elements');
      return value;
    }

    if(arg1.length===0 && arg2.indexOf(true)!=-1){
      console.log('filtering by department '+arg2);

      let filtered:Doctor[]=[];
      for(let x of value){
        if(x.department==='Ayurveda' && arg2[0]===true)
          filtered.push(x);
        if(x.department==='Yoga' && arg2[1])
          filtered.push(x);
        if(x.department==='Unnani' && arg2[2])
          filtered.push(x);
        if(x.department==='Siddha' && arg2[3])
          filtered.push(x);
        if(x.department==='Homeopathy' && arg2[4])
          filtered.push(x);
      }
      return filtered;
    }
    if(arg1.length!==0)
      console.log('filtering by name '+arg1 );

    var semifiltered: Doctor[] = [];
      var pattern = new RegExp(arg1 + '+', 'i');
      for (let i of value){
        if (pattern.test(i.drName))
          semifiltered.push(i);
      }
      if(arg2.indexOf(true)!==-1){
        console.log('and by department');
        let filtered: Doctor[]=[];
        for(let x of semifiltered){
          if(x.department==='Ayurveda' && arg2[0]===true)
            filtered.push(x);
          if(x.department==='Yoga' && arg2[1])
            filtered.push(x);
          if(x.department==='Unnani' && arg2[2])
            filtered.push(x);
          if(x.department==='Siddha' && arg2[3])
            filtered.push(x);
          if(x.department==='Homeopathy' && arg2[4])
            filtered.push(x);
        }
        return filtered;
      }
      else
        return semifiltered;
    }
  }

