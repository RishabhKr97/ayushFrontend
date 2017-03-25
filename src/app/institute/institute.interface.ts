import {IDoctor} from './doctor.interface';
export class IInstitute{
  uid: string;
  name: string;
  fees: number;
  specialities: string[];
  photos: string[];
  ratings: number;

  disciplines: string[];

  location: string;
  about: string;
  doctors: IDoctor[];

}
