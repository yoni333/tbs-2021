export type PrimitiveObject = { [key: string]: number | string };

export function assignData(selfData: PrimitiveObject, data: PrimitiveObject) {
  for (const [key, value] of Object.entries(data || {})) {
    selfData[key] = value;
  }
}

export interface IisValid {
  isValid: boolean;
  message: string;
}
export function isTwice<T extends { [key: number | string]: number }>({
  arr,
  key
}: {
  arr: T[];
  key: number;
}): IisValid {
  let result = { isValid: true, message: "" };
  let memo: { [key: number | string]: number } = {};
  arr.forEach((value: T) => {
    if (memo[value[key]] !== undefined) {
      result.isValid = false;
      // we return as message the problematic value
      result.message = value[key].toString();
    }
  });
  return result;
}
