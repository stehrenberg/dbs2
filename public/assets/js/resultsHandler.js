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
        url: 'votingResults.php',
        dataType: 'json',
        success: function (data) {
            context.voteResults = data;
            context.voteResults.forEach(function(row, i) {
                row.rank = ++i;
                row.votesPercent = (row.votesPercent * 100.0).toPrecision(3);
            });

            pieResults = data.map(function(voteResult) {
                return {
                    name: voteResult.name,
                    y: parseInt(voteResult.votesPercent)
                };
            });

            var piechart = $('#piechart-container').highcharts();
            piechart.series[0].setData(pieResults);

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