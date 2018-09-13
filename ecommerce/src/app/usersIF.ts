export interface IUsers {
  name: string,
    email: string,
    phone: number,
    gender: string,
    address: {
      house: string,
      street: string,
      area: string,
      city: string,
      pin: number,
      state: string,
      country: string
    }
}
