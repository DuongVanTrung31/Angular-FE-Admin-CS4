import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  weight?: number;
  description?: string;
  image?: string;
  category: Category;
}
