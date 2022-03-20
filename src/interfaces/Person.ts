export interface M {
  id: string
  name: string
}
export interface Person extends M {
  email: string
  gender: string
  status: string
}

export interface Student extends Person {}
