export interface M {
  id: string
  name: string
}
export interface Person extends M {
  email: string
  gender: string
  status: string
}

export interface MM extends M {
  _id: string
  __v: number
}

export interface Student extends Person {}
