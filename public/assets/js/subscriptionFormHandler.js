$(document).ready(function () {

    var form = $('#subscription_form');

    form.submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'subscribe.php',
            data: form.serialize(),
            success: function (data) {
                showAlert("success");
                $('#subscription_btn').hide();
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
                showAlert("fail");
                $('#subscription_btn').show();
            }
        });
    });

    function showAlert(type) {
        var alertId = "voting-" + type + "-alert";
        $('#' + alertId).show();
    }
});