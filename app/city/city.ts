import { ICityDetails } from "./details";
import { ICityDistrict } from "./districts";
import { createUID, UID } from "../shared/uid";
import { Resources } from "../shared/resource";
import { Metadata } from "../shared/metadata";



interface ICity{
   metadata:Metadata;
   districts:ICityDistrict[];
   resources:Resources;
   // owner:IOwner;
   details:ICityDetails;
}



class City implements ICity{

   private metadata:Metadata = new Metadata();
   resources:Resources = new Resources({})
   districts:ICityDistrict[]=[];
   constructor(data:Partial<ICity>){
      
   }
}