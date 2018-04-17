$(document).ready(function(){
    //  On focus
    var niceInputs = $('[data-niceInput] input, [data-niceInput] textarea');
    niceInputs.focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });

    // On blur
    niceInputs.blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

    // If field is filled add class
    niceInputs.each(function(){
        if($(this).val() != ''){
            $(this).parent().addClass('has-label');
        }
        if($(this).prop('required', true)){
            var asterisk = '<span class="asterisk"></span>';
            $(this).parent().append(asterisk);
            $(this).parent().addClass('is-required');
        }
    });

});