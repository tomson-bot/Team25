// var crsr=document.querySelector("#cursur")
// var blur=document.querySelector("#cursur-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left=dets.x +"px"
//     crsr.style.top=dets.y+"px"
//     blur.style.left=dets.x -200 +"px"
//     blur.style.top=dets.y -200 +"px"
// })
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    
    height:"75px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
   
})
gsap.to("#main",{
    backgroundColor:"#f3f3f3",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -40%",
        end:"top -80%",
        scrub:2
    }
})
gsap.to(".page3",{
    backgroundColor:"#0E1F32",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -40%",
        end:"top -80%",
        scrub:2
    }
})
/* #cursur{
    height:10px;
    width:10px;
    background-color:#95C11E;
    border-radius: 50%;
    position:fixed;
    z-index:99;
}
#cursur-blur{
    height:350px;
    width:350px;
    background-color:#96c11e2f;
    border-radius: 50%;
    filter:blur(40px);
    position:fixed;
    z-index:9;   
} */