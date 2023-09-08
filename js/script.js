

$(function(){

    $('.bars').click(function(){
        $('.menu_item').toggleClass('open_menu')
    })


    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').show(500);
        }else{
            $('.back_to_top').hide(500);
        }
    })
  

})