import {Location} from '../location';

export interface Doctor {
  id:string;
  drName: string;
  fee: number;
  speciality:string;
  department:string;
  location: Location;
  instituteName: string;
}
