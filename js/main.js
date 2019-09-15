let page = $('.page');
$('.menu_toggle').on('click', function () {
    page.toggleClass('shazam');
});
$('.main-body').on('click', function () {
    page.removeClass('shazam');
});
$('.portfolio').on('click', function () {
    page.removeClass('shazam');
});
$('#portfolio').on('click', function () {
    page.addClass('main-body-rotate');
    setTimeout(function () {
        $('#home').addClass('hide');
        $('#home').removeClass('show');
    }, 700);
    setTimeout(function () {
        $('#port').addClass('show');
        $('#port').removeClass('hide');
        page.removeClass('main-body-rotate');
        $('.main-body').addClass('animated rotateInUpRight');
        setTimeout(function () {
            particlesJS.load("particles-js", "js/particle-cnfg.json");
        }, 1000)
    }, 600)
});
$('#menu-home').on('click', function () {
    page.addClass('port-body-rotate');
    setTimeout(function () {
        $('#port').addClass('hide');
        $('#port').removeClass('show');
    }, 500);
    setTimeout(function () {
        $('#home').removeClass('hide');
        $('#home').addClass('show');
        page.removeClass('port-body-rotate');
    }, 500)
});
$('#port-to-resume').on('click', function () {
    page.addClass('port-body-rotate');
    setTimeout(function () {
        $('#port').addClass('hide');
        $('#port').removeClass('show');
    }, 500);
    setTimeout(function () {
        $('#resume').removeClass('hide');
        $('#resume').addClass('show');
        page.removeClass('port-body-rotate');
    }, 500)
});
$('#menu-resume').on('click', function () {
    page.addClass('main-body-rotate');
    setTimeout(function () {
        $('#home').addClass('hide');
        $('#home').removeClass('show');
    }, 500);
    setTimeout(function () {
        $('#resume').addClass('show');
        $('#resume').removeClass('hide');
        page.removeClass('main-body-rotate');
    }, 500)
});
$('#home-from-resume').on('click', function () {
    page.addClass('resume-body-rotate');
    setTimeout(function () {
        $('#home').addClass('show');
        $('#home').removeClass('hide');
    }, 500);
    setTimeout(function () {
        $('#resume').addClass('hide');
        $('#resume').removeClass('show');
        page.removeClass('resume-body-rotate');
        $('.main-body').addClass('animated rotateInUpRight');
    }, 500)
});
$('#port-from-resume').on('click', function () {
    page.addClass('resume-body-rotate');
    setTimeout(function () {
        $('#port').addClass('show');
        $('#port').removeClass('hide');
    }, 500);
    setTimeout(function () {
        $('#resume').addClass('hide');
        $('#resume').removeClass('show');
        page.removeClass('resume-body-rotate');
        $('.main-body').addClass('animated rotateInUpRight');
    }, 500)
});


