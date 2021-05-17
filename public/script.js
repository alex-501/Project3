$(window).scroll(function() {  
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".header1").addClass(".fixed-header");
        $(".container-menu-header").css('top','-45px');
    } else {
        $(".header1").removeClass(".fixed-header");
        $(".container-menu-header").css('top','0px');
    }
});