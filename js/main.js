/*
    =======================
     Testimonials Carousel
    =======================
*/
const testimonialsCarousel = function() {
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
};

/*
    ===============
     Services Page
    ===============
*/
const servicesPage = function() {

    // Service type array
    const services = ['corporate', 'weddings', 'events'];

    // Service scroll event
    const serviceScrollEvent = function() {
        for (i = 0; i < services.length; i++) { // Loop through each service type
            const thisService = '#service-' + services[i]; // Save section ID as a variable
            const thisServiceInfo = '#' + services[i] + '-info'; // Save info section ID as variable
            $(thisServiceInfo).fadeTo(0, 0); // Hide the info section but maintain its height
            const service = new Waypoint({ // Waypoint plugin class
                element: $(thisService), // Target section
                handler: function() {
                    document.querySelector(thisService).classList.add('focused-service'); // Add class to section
                    $(thisServiceInfo).fadeTo(1000, 1) // Show info section
                },
                offset: 100 // Trigger event 100px above top of section
            });
        }
    };

    // Trigger scroll event only in sm viewports
    $(document).ready(function() {
        if (window.innerWidth < 768) {
            serviceScrollEvent();
        }
    });

    // Trigger scroll event if window resized to sm, else show md+ layout
     $(window).resize(function() {
        if (window.innerWidth < 768) {
            serviceScrollEvent();
        } else {
            for (i = 0; i < services.length; i++) {
                const thisServiceInfo = '#' + services[i] + '-info';
                $(thisServiceInfo).fadeTo(0, 1);
            }
        }
    });

};

/*
    ===================
     Testimonials Page
    ===================
*/
const testimonialsPage = function() {

    testimonialsCarousel();

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
        $('.pointer').css('left', pointerPositions['quarrInfo']);
        if (window.innerWidth >= 768) {
            $('.pointer').css('display', 'block');
        }
    });

    $(window).resize(function() {
        if (window.innerWidth >= 768) {
            $('.pointer').css('display', 'block');
        } else {
            $('.pointer').css('display', 'none');
        }
    })

    /*
        When partner logo is clicked:
        1) Scroll to info partner info
        2) Move pointer into new position
        3) Hide currently displayed partner info
        4) Display new partner info
    */
    $('.partner').each(function() { // Loop through each partner logo div
        const targetItem = $('#' + $(this).attr('for')); // Define variable as ID of matching partner info
        $(this).click(function() { // Create click event for partner logo
            let pointerTargetPos = 0;
            document.querySelector('.partner-info-section').scrollIntoView({ behavior: 'smooth' }); // Scroll to partner info
            Object.keys(pointerPositions).forEach(function(key) { // Loop through object literal of pointer positions
                if (key === targetItem.attr('id')) { // Set pointer position if the key matches the targetItem ID
                    pointerTargetPos = pointerPositions[key];
                }
            }); // End pointer location object loop
            $(".pointer").animate({left: pointerTargetPos}); // Move the pointer to the new position
            $('.partner-info').each(function() { // Loop through info section divs
                const itemToHide = $('#' + $(this).attr('id'));
                if (itemToHide !== targetItem && (itemToHide).is(':visible')) { // Hide partner info if it doesn't match the targetItem ID
                    $(itemToHide).hide();
                }
            }); // End info hiding loop
            $(targetItem).fadeIn(500); // Show selected partner info
            setTimeout(function() { // Ensures the partner info gets scrolled to if a logo gets clicked mid-scroll
                document.querySelector('.partner-info-section').scrollIntoView();
            }, 500);
        }); // End click event
    });
};