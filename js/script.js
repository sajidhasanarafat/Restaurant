

$(function(){

    $('.bars').click(function(){
        $('.menu_item').slideToggle(1000)
    })


    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').show(500);
            $('.menu_item').hide(100);

        }else{
            $('.back_to_top').hide(500);
        }
    })
  

})