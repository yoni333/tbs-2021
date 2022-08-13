import { ClassTypes, Data } from "./data";
import { createUID, UID } from "./uid";
export interface IMetadata {
  // uid:UID;
  // date:number
}
export class Metadata extends Data<IMetadata> {
  constructor(data: IMetadata) {
    super(ClassTypes.Metadata, data);
  }

}
