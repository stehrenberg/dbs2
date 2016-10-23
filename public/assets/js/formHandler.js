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

    function compileTemplate(context) {
        // Pass our data to the template
        var theCompiledHtml = template(context);

        // Add the compiled html to the page
        var clubs = $('#clubs');
        clubs.html(theCompiledHtml);
    }

    var form = $('#vote_form');

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
});