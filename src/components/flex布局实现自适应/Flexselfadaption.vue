<template>
    <div class="home">
        <img src="../assets/vue.svg" alt="Vue logo">
        <div class="flex-test">
            <div class="div1">图片1</div>
            <div class="div2">图片2</div>
            <div class="div3">图片3</div>
            <div class="div4">图片4</div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.flex-test {
    display: flex;
    flex-direction: row;
    width: 60vw;
    height: 50vh;
 
}
.div1 {
        width: 20%;
        background-color: cadetblue;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .div2 {
        width: 20%;
        background-color: darkgray;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .div3 {
        width: 20%;
        background-color: darkolivegreen;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .div4 {
        width: 20%;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>