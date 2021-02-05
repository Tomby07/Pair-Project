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
    $('.pointer').css('left', pointerRelPos.left + 95);
});

$('.partnerQuarr').click(function() {
    $('.pabulumInfo').fadeOut(500, function() {
        $('.mountjoyInfo').fadeOut(500, function() {
            $('.quarrInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: pointerRelPos.left + 95});
});

$('.partnerPabulum').click(function() {
    $('.quarrInfo').fadeOut(500, function() {
        $('.mountjoyInfo').fadeOut(500, function() {
            $('.pabulumInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: pointerRelPos.left + 440});
});

$('.partnerMountjoy').click(function() {
    $('.quarrInfo').fadeOut(500, function() {
        $('.pabulumInfo').fadeOut(500, function() {
            $('.mountjoyInfo').fadeIn(500);
        });
    });
    $(".pointer").animate({left: pointerRelPos.left + 870});
});