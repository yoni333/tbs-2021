import { CityDetails, ICityDetails } from "./details";
import { CityDistrict, ICityDistrict } from "./districts";
import { createUID, UID } from "../shared/uid";
import { Resources } from "../shared/resource";
import { Metadata } from "../shared/metadata";
import { ClassTypes, Data } from "../shared/data";
import { ErrorActionEnum, ErrorData } from "../shared/error";
import { IisValid, twice } from "../shared/object-utils";

export interface ICity {
  districts: CityDistrict[];
  resources: Resources;
  // owner:IOwner;
  details: CityDetails;
}

export class CityValidators {
  static districtValidator(
    districts: ICityDistrict[]
  ): IisValid {
   let result = twice(districts,'position');
   if (!result.isValid) result.message=`district number ${result.message} is created more then once`
    return result;
  }
}

export class City extends Data<ICity> {
  constructor(data: ICity) {
    super(ClassTypes.city);
    this._data.districts=data.districts
    
  }
  private addDistricts(districts: ICityDistrict[]) {
    const { isValid,  message } = CityValidators.districtValidator([
      ...this._data.districts,
      ...districts,
    ]);
    if (isValid) {
      this._data.districts.push(...districts);
    } else {
      this.error({message,caller:'addDistrict',action:ErrorActionEnum.dbLog})
    }
  }
  set district(districts: CityDistrict[]) {
    this.addDistricts(districts);
  }
}
