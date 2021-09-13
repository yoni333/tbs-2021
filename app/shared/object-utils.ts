export function assignData<T>(Data: T) {
  for (const [key, value] of Object.entries(Data)) {
    this[key] = value
  }
}


export interface IisValid{ isValid: boolean; message: string }
export function isTwice<T >(arr:T[],key:string):IisValid{

  let result = { isValid: true, message: "" };
  let memo: { [key: number]: number } = {};
  arr.forEach((value:T) => {
    if (memo[value[key]] !== undefined) {
      result.isValid = false;
      // we return as message the problematic value
      result.message = value[key];
    }
  });
  return result;
}