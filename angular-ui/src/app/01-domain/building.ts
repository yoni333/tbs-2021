export {
  IBuilding,
  IBasicCost,
  EBuildingName,
} from '../../../../app/city/buildings';
import {
  Building as BuildingModel,
  IBuilding,
  IBuildingDialog as IBuildingDialogModel,
} from '../../../../app/city/buildings';
import { Data } from '../../../../app/shared/data';
export class Building extends BuildingModel {
  constructor( data :IBuilding) {
    super(data);
  }
}
