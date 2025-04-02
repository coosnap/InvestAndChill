export class Role {
  id: number;
  role: string;

  constructor(data?: Partial<IRole>) {
    Object.assign(this, data)
  }
}

export interface IRole {
  id: number;
  role: string;
}
