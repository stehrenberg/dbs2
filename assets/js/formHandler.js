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
        clubs: [
            { "name": "TestClub"},
            { "name": "AnotherOne"}
        ]
    };

    // Pass our data to the template
    var theCompiledHtml = template(context);

    // Add the compiled html to the page
    var clubs = $('.clubs');
    console.log(clubs);
    clubs.html(theCompiledHtml);
});