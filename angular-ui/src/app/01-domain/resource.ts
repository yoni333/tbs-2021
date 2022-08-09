import {EResources,IResources} from '../../../../app/shared/resource'
export {EResources,IResources};
export class Resource{

    private _name:EResources
    amount:number
    icon:string
    get name():EResources{
        return this._name;
    }
    constructor(name:EResources,amount:number,icon:string){
        if (!Number.isInteger(amount) || icon.length===0){
            throw new Error("error in resource init");
        }
        //TODO add name check EResource
        this._name =name;
        this.amount=amount;
        this.icon=icon;
    }
}

