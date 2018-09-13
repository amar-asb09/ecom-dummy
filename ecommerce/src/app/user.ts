export class User {
   constructor(
       public name: string,
    public email : string,
    public phone : number,
    public gender : string,
    public address : {
        house : string,
        street : string,
        area: string,
        city: string,
        pin: number,
        state: string,
        country: string
    }){}

}
