/**
 * Created by Steff on 24/10/16.
 */
$(document).ready(function () {

    var templateScript = $("#select_news_cat-template").html();
    var template = Handlebars.compile(templateScript);
    var context = {
        newsCategories: [
            {
                categoryId: "0",
                name: "Test",
            },
            {
                categoryId: "1",
                name: "Test2",
            }]
    };

    //FIXME Wenn Ajax-Call drin muss der Ablauf wieder geändert werden!
    //compileTemplate(context);
    //getNewsCatList();

    var theCompiledHtml = template(context);
    var newsCategories = $('#news-categories');
    newsCategories.html(theCompiledHtml);
    newsCategories.multiselect();

    function getNewsCatList() {
        $.ajax({
            method: 'GET',
            url: 'listclubs.php',
            dataType: 'json',
            success: function (data) {
                context.newsCategories = data;
                compileTemplate(context);
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
            }
        });
    }

    function compileTemplate(context) {
        // Pass our data to the template
        console.log(context);

    }
});