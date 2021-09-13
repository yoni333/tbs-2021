import { ClassTypes } from "./data";

export enum ErrorActionEnum{
  'dbLog'=1,
  'stopAll'=2
}


export interface IErrorDataBase{
  message:string;
  caller:string;
  action:ErrorActionEnum
}

export interface IErrorData extends IErrorDataBase{
  class:ClassTypes;

}

export class ErrorData extends Error{

  static error(e:IErrorData){
    console.error(e.message ,e.class, e.caller , e.action)
  }
}