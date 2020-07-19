// JavaScript Document
var $ = jQuery.noConflict();

$(document).ready(function () {

    /***********menu js*******************/

    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        menuslide_overlap: true,
        menuslide_direction: 'right',
        onMenuopen: function () {}
    });
    /***************trusted-logo-slider js**********/
    $('.trusted-logo-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
              {
                breakpoint:480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            ]
    });

    /***************machine parts slider js**********/
    $('.machine-parts-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            ]
    });
    /*************request a quote popup js**********/
    $('.request-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    
    /*************contact form popup js**********/
    $('.contact-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    var requestQuoteForm = $("form");
    
    requestQuoteForm.submit(function(event){
      event.preventDefault();

      // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "advancemfgtech_request_a_quote";

      requestQuoteForm.find(".site-btn").text("Sending...");
      
      emailjs.sendForm(service_id,template_id,requestQuoteForm[0])
        .then(function(){ 
            requestQuoteForm.find(".site-btn").text("Quote Requested");
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find(".site-btn").text("Submit");
        });

      return false;
    });

    /****************verticle tabing js*******************/
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        //            closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        removeHashfrmUrl: true,
    });

    stickyHeader();
});

$(window).scroll(function () {
    stickyHeader();
});

$(window).load(function () {

});
$(window).resize(function () {

});

function stickyHeader() {
    if ($(window).scrollTop() > $("header").outerHeight()) {
        $("body").addClass("stickyHeader");
    } else {
        $("body").removeClass("stickyHeader");
    }
}


/* jQuery
================================================== */
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});