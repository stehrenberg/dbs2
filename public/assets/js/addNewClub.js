/**
 * Created by Steff on 23/10/16.
 */
$(function() {

    var addClubInput = $('#add-club_input');
    var addClubOverlay = $('.overlay--add-club');

    addClubInput.on('addClub', function(){
        addClubOverlay.show();
        addClubInput.focus();
    });

    $(document).keyup(function(event) {
        var ESC_KEY_CODE = 27;          // works for Google Chrome, keycode is Browser specific :x
        if (event.keyCode == ESC_KEY_CODE) {
            addClubOverlay.hide();
        }
    });

    $('.fa').click(function(event) {
        addClubOverlay.hide();
    });

    var form = $('#add-club_form');
    form.submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'addNewClub.php',
            data: form.serialize(),
            success: function (data) {
                addClubOverlay.hide();
                $('#clubs').trigger('newClubAdded');
                $('#voting-info-alert').show();
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
                alert("fail")
                // ...
            }
        });
    });
});