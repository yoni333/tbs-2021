import {CityDetails, ICityDetails,MapLocation,IMapLocation} from '../../../../app/city/details'
import {ICityData,City as CityModel} from '../../../../app/city/city';
import { Metadata,IMetadata } from '../../../../app/shared/metadata';
export  {ICityData,CityDetails, ICityDetails,MapLocation,IMapLocation,Metadata,IMetadata};
export class City extends CityModel {
    constructor(data:ICityData){
        super(data)
    }
}
