<template>
    <h1>{{helloText}}</h1>
    <button @click="count++">count is:{{count }}</button>
</template>
<script>
  import {ref,watch,computed,onMounted}from 'vue'
  export default{
    props:['msg'],
    setup(props){
        let count=ref(0);
     
        const getCount=()=>count.value=Math.floor(Math.random()*100)
        watch(count,(val,oldVal)=>{
            console.log(`count从${oldVal}变成了${val}`)
        })
        onMounted(getCount);
        let name=ref('HelloWorld');
        let helloText=computed(()=>props.msg+' '+name.value);
        return {
            count,
            name,
            helloText
        }
    }
  }
</script>
<style scoped>
a{
    color: #42b983;
}
</style>