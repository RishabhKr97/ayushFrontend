import {Location} from "../location"
export interface Institute {
  uid: string;
  name: string;
  rating: number;
  specialities: string[];
  location: Location
}
