<template>
    <div class="remandresizeselfadaption">
        内容提示
    </div>
</template>
<script>
import { scaleListener } from './resize';
export default{
    mounted(){
        scaleListener();
    }
}
   
</script>
