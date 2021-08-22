$(document).ready(function(){
//écran de chargement
    $('html').css('overflow-y', 'hidden');
    setTimeout(() => {
        $('.chargement').fadeOut("1000");
        $('html').css('overflow-y', 'scroll');
    }, 2000);


//init de skrollr + destroy init skrollr pour les mobiles
    var s = skrollr.init();
    if (s.isMobile()) {
        s.destroy();
    };
    
//navbar visible en fixed
    $('#posNav').bind('inview', function(event, isInView, IvisiblePartX, visiblePartY){
        if (isInView) {
            $('.nav-fixed').css('opacity', 0)
        }
        else {
            $('.nav-fixed').css('opacity', 1)
        }
    });
                    
//scroll fluide
    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });

//navbar bouton animation
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
                
//animation photo
    $('.photo').bind('inview', function(event, isInView, IvisiblePartX, visiblePartY){
        if (isInView) {
            $(this).toggleClass('scale-in-center');
        }
        else {
            $(this).toggleClass('scale-in-center');
        }
    });

//gallerie
    $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
});