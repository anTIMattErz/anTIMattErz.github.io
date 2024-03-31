// referenced https://stackoverflow.com/questions/26819675/navbar-highlight-for-current-page?rq=3
// and https://www.w3schools.com/js/js_whereto.asp

// checks if current url matches the href of any a elements, then adds active class for css file to act on
$(function(){
        $('a').each(function(){
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('active'); $(this).parents('li').addClass('active');
            }
        });
    });