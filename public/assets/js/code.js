
$('input').keyup(function () {

    var empty = false;
    $('input').each(function () {
        if ($(this).val() == '') {
            empty = true;
        }
    });

    if (empty) {
        $('button').attr('disabled', 'disabled');
    } else {
        $('button').removeAttr('disabled');
    }
});

