// animate__animated
$(window).scroll(function() {
    $('.anime1').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInLeft opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime2').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeIn opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime3').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInUpBig opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime4').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInRight opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime5').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInDownBig opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime6').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInLeftBig opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime7').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__lightSpeedInRight opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime8').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__lightSpeedInLeft opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime9').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__zoomIn opacity");
        }
    });
});
$(window).scroll(function() {
    $('.anime10').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeInRightBig opacity");
        }
    });
});

$(window).scroll(function() {
    $('.path').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeIn faster opacity");
        }
    });
});

$(window).scroll(function() {
    $('.pather').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("animate__animated animate__fadeOut faster opacity");
        }
    });
});
