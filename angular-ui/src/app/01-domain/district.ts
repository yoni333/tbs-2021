import {
  ECityDistricts,
  IECityDistrictsNames,
  ECityDistrictsNames,
  IBuildingLocation,
  IDistrict,
  District as DistrictModel,
} from '../../../../app/city/districts';
import { Data } from '../../../../app/shared/data';
export {IBuildingLocation,IDistrict}
export class District extends DistrictModel {
  constructor(data: IDistrict) {
    super(data);
  }
}
