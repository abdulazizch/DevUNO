$(document).scroll(function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        $(".navbar.navbar-fixed").css('background-color', '#cde6ebef');
        $(".navbar.navbar-fixed").css('transition', 'all 0.3s');
    } else {
        $('.navbar.navbar-fixed').css('background-color', 'transparent');
        $(".navbar.navbar-fixed").css('transition', 'all 0.3s');
    }
});



$('.nav-item').on('click', function(){
    $(this).closest('.nav-item').addClass('active');
    $(this).closest('.nav-item').siblings().removeClass('active');
  });


  $(window).scroll(function() {
      
    if(isInView($("#home .text-start"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.home').addClass('active');
    }
    if(isInView($("#description .section-title"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.desc').addClass('active');
    }
   
    if(isInView($("#specifiactions"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.specs').addClass('active');
    }
    if(isInView($("#compatibility"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.comp').addClass('active');
    }
    if(isInView($("#setup-instruction")) && !isInView($("#compatibility .section-title"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.setup-ins').addClass('active');
    }
    if(isInView($("#accessories")) && !isInView($("#setup-instruction .section-title"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.acrs').addClass('active');
    }
    if(isInView($("#FAQs"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.faq').addClass('active');
    }
    
});

function isInView(el){
    var top_of_element = $(el).offset().top;
    var bottom_of_element = $(el).offset().top + $(el).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        return true;
    } else {
        return false;
    }
}

if(window.innerWidth < 992){
    $('.nav-item').on('click', function(){
        $('.navbar-toggler').click();
      });
}