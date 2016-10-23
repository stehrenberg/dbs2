/**
 * Created by Steff on 23/10/16.
 */
$(function () {

    var cookieString = getCookie("hasVoted");
    console.log("document.cookie: " + document.cookie);
    console.log("cookie String: " + cookieString);
    console.log("length: " + cookieString.length);


    if(cookieString.length > 0) {
        $('#results_tab').show();
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }
});