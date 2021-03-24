
$(function () {
    $('#btn').click(function () {
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link == null || link == "", content == null || content == "") {
            alert("please fill in all the options");
            return false;
        }

        let i = 0;
        let inteval = setInterval(function () {
            $.post(link,"content:" ($("#msg").val() == "" ? "Hide ur webhooks!" : $("#msg").val()),
                        "username::" ($("#username").val() == "" ? null : $("#username").val()),
                        avatar_url: ($("#avatar").val() == "" ? null : $("#avatar").val()),

    
       }, 50)



    });
});
