/**
 * Created by Steff on 23/10/16.
 */
$(function () {

    var templateScript = $("#voting-success-alert-template").html();
    var template = Handlebars.compile(templateScript);
    var context = {
        voteCount: 0
    };

    compileTemplate(context);

    $.ajax({
        method: 'GET',
        url: 'countVotes.php',
        dataType: 'json',
        success: function (data) {
            context.voteCount = data;
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
        var alertBox = $('#voting-success-alert');
        alertBox.html(theCompiledHtml);
    }
});