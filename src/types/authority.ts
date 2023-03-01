export interface QueryInt {
    id:number,
    authority:string
}

interface ListInt {
    name:string,
    roleId:number,
    viewRole?:string,
    roleList?:ListInt[]
}
export class InitData {
    id:number
    authorityIds:number[] 
    list:ListInt[] = []
    treeRef:any
    
    constructor(id:number,authority:string){
        this.id = id
        this.authorityIds = authority.split(',').map(v=>+v)
    }
}