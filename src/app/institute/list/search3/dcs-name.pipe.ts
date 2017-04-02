import { Pipe, PipeTransform } from '@angular/core';
import {Dcs} from "./dcs";

@Pipe({
  name: 'dcsName'
})
export class DcsNamePipe implements PipeTransform {

  transform(value: Dcs[], arg1,arg2,arg3,arg4,arg5,arg6) {
    console.log('In Pipe');
    return null;
  }

}
