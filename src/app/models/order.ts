import {User} from "./user";

export interface Order {
  id?: number;
  fullName?: string;
  address?: string;
  email?: string;
  phone?: string;
  note?: string;
  createAt?: Date;
  status?: string;
  user?: User;
}
