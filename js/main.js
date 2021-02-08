// Testimonials slideshow properties
$('.slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
});

// Pointer left position properties
const pointerPositions = {
    quarrInfo: '10.5%',
    pabulumInfo: '41%',
    mountjoyInfo: '79.2%'
};

/* 
    On testimonials page load:
    1) Show only Quarr Group info
    2) Position pointer under Quarr logo
*/
$(document).ready(function() {
    $('#quarrInfo').show();
    $('#pabulumInfo').hide();
    $('#mountjoyInfo').hide();
    $('.pointer').css('left', pointerPositions[quarrInfo]);
});

/*
    When partner logo is clicked:
    1) Move pointer into new position
    2) Hide currently displayed partner info
    3) Display new partner info
*/
$('.partner').each(function() { // Loop through each partner logo div
    const targetItem = $('#' + $(this).attr('for')); // Define variable as ID of matching partner info
    $(this).click(function() { // Create click event for partner logo
        let pointerTarget = 0;
        Object.keys(pointerPositions).forEach(function(key) { // Loop through object literal of pointer positions
            if (key === targetItem.attr('id')) { // Set pointer position if the key matches the targetItem ID
                pointerTarget = pointerPositions[key];
            }
        });
        $(".pointer").animate({left: pointerTarget}); // Move the pointer to the new position
        $('.partner-info').each(function() { // Loop through info section divs
            const itemToHide = $('#' + $(this).attr('id'));
            if (itemToHide !== targetItem) { // Hide partner info if it doesn't match the targetItem ID
                $(itemToHide).fadeOut(500).delay(500);
            }
        });
        $(targetItem).fadeIn(500); // Show matching partner info
    });
});