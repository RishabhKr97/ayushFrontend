import { Pipe, PipeTransform } from '@angular/core';
import {IInstitute} from "../institute.interface";

@Pipe({
  name: 'searchPipes'
})
export class SearchPipesPipe implements PipeTransform {

  transform(value: IInstitute[] , args?: string): IInstitute[] {
    let filter: string = args[0]?args[0].toLocaleLowerCase(): null;
    return filter? value.filter((institute: IInstitute) =>
    institute.name.toLocaleLowerCase().indexOf(filter)!=-1) : value;
  }

}
