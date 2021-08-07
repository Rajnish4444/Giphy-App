// import { Url } from "node:url";

export class Giphy {
  constructor(
    public type: string,
    public id: string,
    public url: string,
    public images: any,
    public rating: string,
    public userName: string,
    public source: string
        ){}
}
