export interface LisInt {
    userId:number,
    id:number,
    title:string,
    body:string
}

interface SelectDataInt {
    title:string,
    body:string,
    page:number,
    count:number
}

export class InitData {
    selectData:SelectDataInt = {
        title:'',
        body:'',
        page:0,
        count:0
    }
    list:[LisInt][]=[]

    dataList:LisInt[]=[]
}