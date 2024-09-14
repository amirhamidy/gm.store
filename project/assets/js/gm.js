//slider//
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//slider//
//clickShop//
let openShop = $('.shop-icon')
let shop = $('.shop')
let closeShop = $('.close-shop')
openShop.on('click',function () {
    shop.css('visibility','visible')
    shop.css('opacity','1')
closeShop.on('click',function () {
    shop.css('visibility','hidden')
    shop.css('opacity','0')
})
})
//clickShop//
//clickSub//
let openSub = $('.sub-icon')
let sub = $('.sub')
let closeSub = $('.close-sub')
openSub.on('click' , function () {
    sub.css('visibility' , 'visible')
    sub.css('opacity','1')
    closeSub.on('click' , function () {
    sub.css('visibility' , 'hidden')
        sub.css('opacity','0')
})
})
















//clickSub//
