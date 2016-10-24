/**
 * Created by Steff on 24/10/16.
 */
$(function () {

    var templateScript = $("#select_news_cat-template").html();
    var template = Handlebars.compile(templateScript);
    var context = {
        newsCategories: []
    };

    //compileTemplate(context);
    //FIXME Wenn Ajax-Call drin muss der Ablauf wieder geändert werden!
    //getNewsCatList();

    var theCompiledHtml = template(getNewsCatList());
    var newsCategories = $('#news-categories');
    newsCategories.html(theCompiledHtml);
    var newsCatMultiSelect = $('#news-categories');
    newsCatMultiSelect.multiselect();

    function getNewsCatList() {
        return context.newsCategories = [
            {
                categoryId: "0",
                categoryName: "Test",
            },
            {
                categoryId: "1",
                categoryName: "Test2",
            }];
        // $.ajax({
        //     method: 'GET',
        //     url: 'listclubs.php',
        //     dataType: 'json',
        //     success: function (data) {
        //         context.newsCategories = data;
        //         compileTemplate(context);
        //     },
        //     error: function (jqXHR, textStatus, error) {
        //         console.log(error);
        //     }
        // });
    }

    function compileTemplate(context) {
        // Pass our data to the template
        console.log(context);

    }
});