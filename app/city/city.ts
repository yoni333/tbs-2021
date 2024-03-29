import { CityDetails, ICityDetails } from "./details";
import { District, IDistrict } from "./districts";
import { createUID, UID } from "../shared/uid";
import { Resources } from "../shared/resource";
import { Metadata } from "../shared/metadata";
import { ClassTypes, Data } from "../shared/data";
import { ErrorActionEnum, ErrorData } from "../shared/error";
import { IisValid, isTwice } from "../shared/object-utils";

export interface ICityData {
  districts: District[];
  resources: Resources;
  // owner:IOwner;
  details: CityDetails;
}

// export class CityValidators {
//   static districtValidator(districts: IDistrict[],newDistrict:IDistrict[]): IisValid {
//     let result = isTwice({ arr: [...districts.map(d=>d.name),...newDistrict.map(d=>d.name)], key: "position" });
//     if (!result.isValid)
//       result.message = `district number ${result.message} is created more then once`;
//     return result;
//   }
// }

export class City extends Data<ICityData> {
  constructor(data: ICityData) {
    super(ClassTypes.city, data);
  }
  addDistrict(district: IDistrict) {
    this._data.districts.push(new District(district));
  }
  // addDistricts(districts: IDistrict[]) {
  //   const { isValid, message } = CityValidators.districtValidator(
  //     this._data.districts,
  //     districts
  //   );
  //   if (isValid) {
  //     this._data.districts.push(...districts);
  //   } else {
  //     this.error({
  //       message,
  //       caller: "addDistrict",
  //       action: ErrorActionEnum.dbLog
  //     });
  //   }
  // }
}
