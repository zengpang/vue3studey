<template>
    <h1>{{helloText}}</h1>
</template>
<script>
     export default{
        props:['msg'],
        data(){
            return {
                count:0, //逻辑1的数据
                name:'HelloWorld' //逻辑2的数据
            }
        },
        methods:{
            onAdd(){  //逻辑1的方法
                this.count++;
            },
            getCount(){ //逻辑2的方法
                this.count=Math.floor(Math.random()*100);
            }
        },
        computed:{
            helloText(){  //逻辑2的计算属性
               return this.msg+' '+this.name;
            }
        },
        watch:{     
            count(){  //逻辑1的watch
                console.log('count 变了');
            }
        },
        mounted(){
            this.getCount() //逻辑1的初始化操作
        }
     }
</script>
<style scoped>
  a{
    color:#42b983
  }
</style>