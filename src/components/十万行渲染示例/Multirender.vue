<template>
    <div class="container" @scroll="onScroll">
        <div class="panel" ref="panel" :style="{paddingTop:paddingTop+'px'}">
           <div class="item" v-for="item in visibleList" :key="item">
              {{item}}
           </div>
        </div>
    </div>
</template>
<script>
import { onMounted,ref,computed } from 'vue';

   export default{
    setup(props){
       let panel=ref(null) //列表容器DOM
       //构造的长列表原始数据
       let raw=Array(100000).fill(0).map((v,i)=>`item-${i}`);
       let count=10; //实际渲染DOM的列表数量
       let start=ref(0);//从长列表数组总截取数据的起点
       let end=ref(10);//从长列表数组总截取数据的终点
       let itemHeight=30;//单个列表项的高度
       let paddingTop=ref(0);//列表容器的上内边距
       let totalHeight=raw.length*itemHeight //原始数据理论上完全渲染后占据的总高度
       let visibleList=computed(()=>raw.slice(start.value,end.value));//根据起点和终点获取要渲染的数据
       onMounted(()=>panel.value.style.height=totalHeight+'px');//在mounted后设置列表容器的高度
       const onScroll=function(e){
          start.value=Math.floor(e.target.scrollTop/itemHeight);//当滚动后，根据滚动距离与单位列表项高度重新计算起点的位置
          end.value=start.value+count;//设置终点的位置
          paddingTop.value=start.value*itemHeight;//设置列表容器上内边距,来填充删除DOM留下的空缺

       };
       return {visibleList,paddingTop,panel,onScroll};
    }
   }
</script>
<style scoped>
   .container{
    height: 300px;
    overflow-y: scroll;
   }
   .item{
    border: 1px solid #eee;
    line-height: 30px;
    height: 30px;
    width: 300px;
    padding:  0 10px;
    cursor: pointer;
   }
</style>