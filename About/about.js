
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    // ]
});

$('.main-imgs').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    button: false,

});



$('.lovedbyimg').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,

});





// menu popup
document.querySelector("#popu").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="hidden"
})

document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

document.querySelector("#aaaa").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#bbbb").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#cccc").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#dddd").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#eeee").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

document.querySelector("#ffff").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})
document.querySelector("#gggg").addEventListener("click",()=>{
    document.querySelector("body").style.overflowY="visible"
})

