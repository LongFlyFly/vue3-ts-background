<template>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>

    <div>
       <el-tree
            ref="treeRef"
            :data="list"
            show-checkbox
            :check-strictly ="true"
            node-key="roleId"
            :default-checked-keys="authorityIds"
            :props="{
                 children: 'roleList',
                    label: 'name',
            }"
        /> 
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import {useRoute} from 'vue-router';
import {InitData,QueryInt} from '../types/authority';
import {geTauthority} from '../http/api';
export default defineComponent({
    setup () {
        const route = useRoute()
        const query:any = route.query;

        const data = reactive(new InitData(query.id,query.authority))
        onMounted(()=>{
            geTauthority().then(res=>{
                data.list = res.data
                console.log(data.authorityIds);
                
            })
        })

        const onSubmit = ()=>{
            console.log(data.treeRef.getCheckedKeys());
            alert("http提交")
        }
        return {
            ...toRefs(data),
            onSubmit,
        }
    }
})
</script>

<style scoped>

</style>