$('.slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
});

let pointerRelPos = $('.partners-content').position();

$(document).ready(function() {
    $('.quarrInfo').show();
    $('.pabulumInfo').hide();
    $('.mountjoyInfo').hide();
    $('.pointer').css('left', (pointerRelPos.left - 20) + 10.5 + '%'); // 95
});

$('.partnerQuarr').click(function() {
    $('.pabulumInfo').fadeOut(500, function() {
        $('.mountjoyInfo').fadeOut(500, function() {
            $('.quarrInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: (pointerRelPos.left - 20) + 10.5 + '%'}); // 95
    if (window.innerWidth < 768) {
        document.querySelector(".partner-info-section").scrollIntoView();
    }
});

$('.partnerPabulum').click(function() {
    $('.quarrInfo').fadeOut(500, function() {
        $('.mountjoyInfo').fadeOut(500, function() {
            $('.pabulumInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: (pointerRelPos.left - 20) + 41 + '%'}); // 440
    if (window.innerWidth < 768) {
        document.querySelector(".partner-info-section").scrollIntoView();
    }
});

$('.partnerMountjoy').click(function() {
    $('.quarrInfo').fadeOut(500, function() {
        $('.pabulumInfo').fadeOut(500, function() {
            $('.mountjoyInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: (pointerRelPos.left - 20) + 79.2 + '%'}); // 870
    if (window.innerWidth < 768) {
        document.querySelector(".partner-info-section").scrollIntoView();
    }
});