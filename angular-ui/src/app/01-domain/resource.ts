import {EResources,IResources,zeroResources,SpendAnswer,Resources, ResourcesMap, ResourcesIconMap} from '../../../../app/shared/resource'
export {EResources,IResources,zeroResources,SpendAnswer,Resources,ResourcesMap,ResourcesIconMap};

export interface ResourcesUiItem{name:EResources,amount:number,icon:string}
export type ResourcesUiItemsMap = Map<EResources,ResourcesUiItem>
export class ResourcesUI{

    private _resources:ResourcesMap
    private _iconList:ResourcesIconMap
     
    constructor(resources:ResourcesMap,iconList:ResourcesIconMap){
        this._resources=resources
        this._iconList=iconList
        
        
    }

    get resources():ResourcesUiItemsMap{
        const items :ResourcesUiItemsMap = new Map()
        for (const [key,value] of  this._resources){
            items.set(key,{name:key,amount:value,icon:this._iconList.get(key)||''})
        }
        return items;
    }

}

