import {Product} from "./product";
import {User} from "./user";

export interface Review {
  id?:number;
  content?:string;
  rating?:number;
  product:Product;
  user:User;
}
