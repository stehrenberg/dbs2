/**
 * Created by Steff on 16/10/16.
 */
$(window).load(function () {
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
});