export interface Person {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface Student extends Person {}
