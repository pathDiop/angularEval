export class Charcaters{
    id?:number;
    title?:string;
    key?:string;
    name?:string;
    active?:boolean;
    constructor(id:number,title:string,key:string,name:string,active:boolean){
        this.id = id;
        this.title = title;
        this.key = key;
        this.name = name;
        this.active = active;
    }

}