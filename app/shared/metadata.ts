import { createUID, UID } from "./uid";

export class Metadata {


  uid:UID = createUID();
  data:number = new Date().valueOf();

}