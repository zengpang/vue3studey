const resize=()=>{
    //与原来1080的比值
    let scale=window.innerHeight/1080;
    document.documentElement.style.fontSize=`${32*scale}px`;
    console.log('resize');
}
const scaleListener=()=>{
    window.addEventListener('resize',resize);
    console.log('scaleListening');
}
export {
    scaleListener
}