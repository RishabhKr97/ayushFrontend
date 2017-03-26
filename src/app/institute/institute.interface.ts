import {diagnosticServices} from "./diagnostics";
import {clinicalServices} from "./clinic";
export class IInstitute{
  uid: string;
  name: string;
  photos: string[];
  ratings: number;
  disciplines: string[];
  location: string;
  about: string;
  services : clinicalServices[];
  tests: diagnosticServices[];

}
