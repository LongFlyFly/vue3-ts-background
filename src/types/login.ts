import type {FormInstance} from 'element-plus';
import {ref} from 'vue';
export interface LofinFormInt {
    userName:string,
    password:string
}

export class InitData {
    loginForm:LofinFormInt = {
        userName:'',
        password:''
    }
    loginFormRef = ref<FormInstance>()
}




