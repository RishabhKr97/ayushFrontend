import { Pipe, PipeTransform } from '@angular/core';
import {Dcs} from "./dcs";

@Pipe({
  name: 'dcsName'
})
export class DcsNamePipe implements PipeTransform {
  transform(value: Dcs[], arg1:string, arg2:string): Dcs[] {
    let filtered:Dcs[]=[];

    console.log('searchT is '+arg1);
    console.log('Dname is '+arg2);

    if(arg2==='' && arg1===''){
      return value;
    }

    var pattern = new RegExp(arg1 + '+', 'i');

    if(arg1!==''){
      let semifiltered:Dcs[]=[];
      for(let i of value){
        if(pattern.test(i.name))
          semifiltered.push(i);
      }
      if(arg2==='')
        filtered=semifiltered;
      else{
        for(let x of semifiltered){
          for(let y of x.department){
            if(y===0&&arg2==='Ayurveda'){
              filtered.push(x);
              break;
            }
            if(y===1&&arg2==='Yoga'){
              filtered.push(x);
              break;
            }
            if(y===0&&arg2==='Unnani'){
              filtered.push(x);
              break;
            }
            if(y===0&&arg2==='Siddha'){
              filtered.push(x);
              break;
            }
            if(y===0&&arg2==='Homeopathy'){
              filtered.push(x);
              break;
            }
          }
        }
        return filtered;
      }
    }

  }

}
