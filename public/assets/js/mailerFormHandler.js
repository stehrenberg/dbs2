$(document).ready(function () {

    var mailViewer = $('mailViewer');
    mailViewer.hide();
    var form = $('#send-newsletter_form');

    form.submit(function(event) {

        event.preventDefault();

        $.ajax({
            method: 'POST',
            url: 'sendNewsletter.php',
            data: form.serialize(),
            success: function (data) {
                console.log(data);
                renderMail(data);
                mailViewer.show();
                $('#mail_btn').hide();
            },
            error: function (jqXHR, textStatus, error) {
                console.log(error);
                $('#mail_btn').show();
            }
        });
    });

    function showAlert(type) {
        var alertId = "voting-" + type + "-alert";
        $('#' + alertId).show();
    }

    function renderMail(data){
        var context = {
            subject: data.subject,
            mailText: data.text,
            recipients: data.recipientData
        };
        var recipientListTemplateScript = $("#recipient_list-template").html();
        var recipientListTemplate = Handlebars.compile(recipientListTemplateScript);
        var compiledHtml = recipientListTemplate(context);
        var recipients = $('#recipient-list');
        recipients.html(compiledHtml);

        var mailViewerTemplateScript = $('#mail_viewer-template').html();
        var mailViewerTemplate = Handlebars.compile(mailViewerTemplateScript);
        compiledHtml = mailViewerTemplate(context);
        var mailViewer = $('#mail-viewer');
        mailViewer.html(compiledHtml);
    }
});