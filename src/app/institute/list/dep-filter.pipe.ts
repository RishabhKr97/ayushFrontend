import { Pipe, PipeTransform } from '@angular/core';
import {IInstitute} from "../institute.interface";
import {consoleTestResultHandler} from "tslint/lib/test";
@Pipe({
  name: 'depFilter'
})
export class DepFilterPipe implements PipeTransform{
  transform(value: IInstitute[], args: boolean[]): IInstitute[] {
    let filtered: IInstitute[] = [];

    let res:boolean=false;

    for(let i:number =0;i<5;i++){
      res = res || args[i];
      console.log('res was orred with '+args[i]);
    }
    console.log('ultimately res is '+res);
    if(!res)
      return value;

    else {
      for(let i of value){
        for(let d of i.department){
          if(d==='Ayurveda' && args[0]){
            filtered.push(i);
            break;
          }
          if(d==='Yoga' && args[1]){
            filtered.push(i);
            break;
          }
          if(d==='Unnani' && args[2]){
            filtered.push(i);
            break;
          }
          if(d==='Siddha' && args[3]){
            filtered.push(i);
            break;
          }
          if(d==='Homeopathy' && args[4]){
            filtered.push(i);
            break;
          }
        }
      }
      return filtered;
    }
  }
}
