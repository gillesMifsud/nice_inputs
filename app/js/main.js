$(document).ready(function(){

    $('form input[type="text"], form input[type="password"]').on('focus', function () {
        var elem = $( this );
        var parentElem = elem.closest('div');
        if(elem.is(":focus")) {
            parentElem.addClass("focused");
        }
    });

    $('form input[type="text"], form input[type="password"]').on('blur', function () {
        var elem = $( this );
        var parentElem = elem.closest('div');
        parentElem.removeClass("focused");
    });

});