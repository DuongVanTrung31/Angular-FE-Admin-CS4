import {Role} from "./role";

export interface User {
  id?:number;
  username?:string;
  password?:string;
  email?:string;
  fullName?:string;
  phone?:string;
  birthDate?:Date;
  address?:string;
  avatar?:string;
  role?:Role;
}
