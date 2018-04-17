$(document).ready(function(){

    /*niceInputs.on('focus', function () {
        var elem = $( this );
        var parentElem = elem.closest('div');
        if(elem.is(":focus")) {
            parentElem.addClass("focused");
        }
    });

    niceInputs.on('blur', function () {
        var elem = $( this );
        var parentElem = elem.closest('div');
        parentElem.removeClass("focused");
    });*/
    //  Au focus
    var niceInputs = $('[data-niceInput] input');
    niceInputs.focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });

    // à la perte du focus
    niceInputs.blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

    // si un champs est rempli on rajoute directement la class has-label
    niceInputs.each(function(){
        if($(this).val() != ''){
            $(this).parent().addClass('has-label');
        }
    });

});