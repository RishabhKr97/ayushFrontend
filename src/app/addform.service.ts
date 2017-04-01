import {Injectable} from '@angular/core';
import {Http , Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AddformService {
  id = 'http://192.168.1.109:3000/institutions/1/clinicals';

  constructor(private _http: Http) {
  }

  sendForm(form: any) {
    return this._http.post(this.id , form);
  }

  getForm() {
    return this._http.get(this.id).map((response:Response) => response.json());
  }
}
