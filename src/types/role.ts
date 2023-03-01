export interface LisInt {
    roleName:string,
    roleId:number,
    authority:number[],
}


interface SelectDataInt {
    roleName:string,
    roleId:number,
}

export class InitData {
    selectData:SelectDataInt = {
        roleName:'',
        roleId:0
    }
    list:LisInt[] = []
    // listDate:[LisInt][] = []
    isAdd = false
}