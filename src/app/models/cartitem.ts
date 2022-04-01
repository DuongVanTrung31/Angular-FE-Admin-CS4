import {Product} from "./product";
import {User} from "./user";

export interface Cartitem {
  id?:number;
  product?:Product;
  user?:User;
  quantity?: number;
}
