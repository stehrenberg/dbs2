/**
 * Created by Steff on 23/10/16.
 */
$(function () {

    var cookieString = getCookie("hasVoted");

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