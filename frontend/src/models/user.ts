import {Role} from "./role";

export class User {
  fullName: string | null = null;
  id: number | null = null;
  isVip: boolean = false;
  phoneNumber: string | number | null = null;
  roles: Role[] = [];
  fromDate: string | number | null = null;
  toDate: string | number | null = null;
  username: string | null = '';
  firstName: string | null = null;
  lastName: string | null = null;
  email: stirng | null = null;

  constructor(props?: Partial<IUser>) {
    Object.assign(this, props)
  }
}

export interface IUser {
  fullName: string;
  id: number;
  isVip: boolean;
  phoneNumber: string | number;
  roles: Role[];
  fromDate: string | number;
  toDate: string | number
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
