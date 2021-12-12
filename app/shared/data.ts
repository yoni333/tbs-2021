import { ErrorActionEnum, ErrorData, IErrorDataBase } from "./error";

export enum ClassTypes {
  // do not make changes to this list - without make DB normalization.
  // you can only add to this list with out DB normalization
  Metadata = 2,
  city = 20,
  CityDetails = 21,
  CityDistrict = 22,
  CityBuilding = 24,
  Resources = 1000
}

export abstract class Data<T> {
  protected _data!: T;
  private _type: ClassTypes;

  constructor(type: ClassTypes, data: T) {
    this._type = type;
    this._data = data;
  }
  get data(): T {
    return this._data;
  }
  set data(data: T) {
    this._data = data;
  }
  get type(): ClassTypes {
    return this._type;
  }
  // abstract getData(): T;

  error({ message, action, caller }: IErrorDataBase) {
    ErrorData.error({ message, caller, class: this.type, action: action });
  }
}
