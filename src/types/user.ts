export interface LisInt {
    id:number,
    nikeName:string,
    userName:string,
    role:RoleInt[],
}


export interface ActiveInt {
    id:number,
    nikeName:string,
    userName:string,
    role:number[],
}


interface RoleInt {
    role:number,
    roleName:string
}

interface SelectDataInt {
    nikeName:string,
    role:number,
}

interface RoleListInt {
    roleName:string,
    roleId:number,
    suthorty:number[]
}

export class InitData {
    selectData:SelectDataInt = {
        nikeName:'',
        role:0
    }
    list:[LisInt][] = []
    listDate:[LisInt][] = []
    roleList:RoleListInt[]= []
    active:ActiveInt = {
        id: 0,
        nikeName: "",
        userName: "",
        role: []
    }
    isShow = false
}