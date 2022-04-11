;(function($) {
    "use strict"; 
    
    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area, .enrole_course').length ){  
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                };
            });  
        };
    };    
    
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    };
    
    //* Counter Js 
    function counterUp(){
        if ( $('.counter_area').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };    
    
    /*Function Calls*/ 
    new WOW().init();
    navbarFixed ();    
    magnificPopup ();
    counterUp ();
//    windowScroll ();
    
})(jQuery);