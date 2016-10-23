/**
 * Created by Steff on 16/10/16.
 */
$(function () {

    // Grab the template script
    var templateScript = $("#select_clubs-template").html();
    // Compile the template
    var template = Handlebars.compile(templateScript);
    // Define our data object
    var context = {
        clubs: []
    };

    compileTemplate(context);
    getClubList();

    function getClubList() {
        $.ajax({
            method: 'GET',
            url: 'listclubs.php',
            dataType: 'json',
            success: function (data) {
                context.clubs = data;
                compileTemplate(context);
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
            }
        });
    }

    function compileTemplate(context) {
        // Pass our data to the template
        var theCompiledHtml = template(context);

        // Add the compiled html to the page
        var clubs = $('#clubs');
        clubs.html(theCompiledHtml);
    }

    var form = $('#vote_form');

    // Send vote to backend and show feedback
    form.submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'vote.php',
            data: form.serialize(),
            success: function (data) {
                showAlert("success");
                $('#vote_btn').hide();
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
                showAlert("fail");
                $('#vote_btn').show();
            }
        });
    });

    function showAlert(type) {
        var alertId = "voting-" + type + "-alert";
        $('#' + alertId).show();
    }

    // trigger overlay for input of a new club that's not listed yet
    var clubSelect = $('#clubs');
    clubSelect.change(function(event) {
        var selectValue = clubSelect.val();
        if(selectValue == 'add_club') {
            var addClubInput = $('#add-club_input');
            addClubInput.trigger('addClub');
        }
    });

    // re-render list of clubs in select dropdown after new club was added
    clubSelect.on('newClubAdded', function() {
        getClubList();
    });

});