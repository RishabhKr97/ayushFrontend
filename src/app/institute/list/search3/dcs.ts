import {Location} from "../location";
export interface Dcs {
  name:string;
  institutionName:string;
  rating: number;
  type:string;
  id:string;
  department:string[];
  location:Location;

}
