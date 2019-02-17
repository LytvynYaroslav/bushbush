$('.menu-icon').on("click", function(){
    console .log(event);
    if (event.target.style.left==="320px"){
        $('.mobile-menu').animate({'left':'0'},"slow")
        $('.menu-icon').css({'left':"-320px"},"slow")
    }else{
    $('.mobile-menu').animate({'left':'0'},"slow")
    $('.menu-icon').css({'left':"320px"},"slow")
    }
})