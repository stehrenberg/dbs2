/**
 * Created by Steff on 24/10/16.
 */
$(document).ready(function () {

    var templateScript = $("#select_news_cat-template").html();
    var template = Handlebars.compile(templateScript);
    var context = {
        newsCategories: []
    };

    compileTemplate(context);
    getNewsCatList();

    function getNewsCatList() {
        $.ajax({
            method: 'GET',
            url: 'newsletterCategories.php',
            dataType: 'json',
            success: function (data) {
                context.newsCategories = data;
                compileTemplate(context);
                $('#news-categories').multiselect();
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
                newsCategories.multiselect();
            }
        });
    }

    function compileTemplate(context) {
        var theCompiledHtml = template(context);
        var newsCategories = $('#news-categories');
        newsCategories.html(theCompiledHtml);
    }
});