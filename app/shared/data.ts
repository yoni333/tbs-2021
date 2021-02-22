import { ErrorActionEnum, ErrorData, IErrorDataBase } from "./error";

export enum ClassTypes {
  // do not make changes to this list - without make DB normalization.
  // you can only add to this list with out DB normalization
  Metadata=2,
  city=10,
  CityDetails=11,
  CityDistrict=12,
  Resources=13

}

export interface IData<T>{
  data:T;
  getData(): T;
}



export abstract class Data<T> implements IData<T>{
 protected _data:T;
 private _type:ClassTypes ;
 
 constructor(type:ClassTypes){
  this._type =type

 }
 get data():T{
   return this._data
 }
 get type():ClassTypes{
   return this._type
 }
 abstract getData(): T;
  
 error({message,action,caller}:IErrorDataBase){
  ErrorData.error({message,caller,class:this.type,action:action})

 }
}
