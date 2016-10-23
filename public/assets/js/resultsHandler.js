/**
 * Created by Steff on 23/10/16.
 */
$(function () {

    // Grab the template script
    var templateScript = $("#vote_results-template").html();
    // Compile the template
    var template = Handlebars.compile(templateScript);
    // Define our data object
    var context = {
        voteResults: []
    };

    compileTemplate(context);

    $.ajax({
        method: 'GET',
        url: 'countVotes.php',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            context.voteResults = data;
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
        var alertBox = $('#vote_results');
        alertBox.html(theCompiledHtml);
    }
});