
(function ($) {
    "use strict";

    $('.input3').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })

    $("#radio1").on('change', function () {
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function () {
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });

    var perimeter = $('.validate-input input[name="perimeter"]');
    var length = $('.validate-input input[name="length"]');

    $('.calculate-btn').on('click', function () {
        var check = true;
        var perimeterVal = $(perimeter).val().trim();
        var lengthVal = $(length).val().trim();

        if (!$.isNumeric(perimeterVal)) {
            showValidate(perimeter);
            check = false;
        }
        if (!$.isNumeric(lengthVal)) {
            showValidate(length);
            check = false;
        }
        var scale = $("input[name='scale']:checked").val();
        if (check) {
            var den = scale === 'inch' ? 21703.68 : 12.56;
            var vol = (perimeterVal * perimeterVal * lengthVal) / den;
            $(".calculate-form-result").html('The volume is: ' + vol.toFixed(2) + ' (CFT)');
            perimeter.val('');
            length.val('');
            $("button").html('Recalculate');
            return;
        }
        return check;
    });

    $('.validate-form .input3').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);