import {EBuildingName} from '../../../../app/city/buildings'

export class Card{
    private _image:string
    private _title:EBuildingName
    get image():string{
        return this._image
    }
    get title():EBuildingName{
        return this._title
    }
    constructor(image:string,title:EBuildingName){
        this._image=image
        this._title=title
    } 
}