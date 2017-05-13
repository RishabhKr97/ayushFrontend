import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  id:string;
  constructor() { }
  setid(id){
    this.id=id;
  }
}
