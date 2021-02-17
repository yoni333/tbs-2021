import { ICityDetails } from "./details";
import { ICityDistrict } from "./districts";
import { UID } from "../shared/uid";
import { IResource } from "../shared/resource";



interface ICity{
   uid:UID;
   districts:ICityDistrict[];
   resources:IResource;
   // owner:IOwner;
   details:ICityDetails;
}