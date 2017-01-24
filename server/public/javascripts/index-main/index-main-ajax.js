$(function () {
    $("#signup-btn").click(function (event) {
        event.preventDefault();
        var url = '/signup',
            data = {
                username: $("#signup-username").val(),
                email: $('#signup-email').val(),
                password: $("#signup-password").val()
        };
        $.post(url, data, function (data) {
            if(data.statCode == '200') {
                alert(data.msg)
            }else{
                alert(data.msg);
            }
        });
    })

    $("#login-btn").click(function (event) {
        event.preventDefault();
        var url = '/login',
            data = {
                email: $('#login-email').val(),
                password: $("#login-password").val()
        };
        $.post(url, data, function (data) {
            if(data.statCode == '200') {
                window.location.href = data.url;
            }else{
                alert(data.msg);
            }
        });
    })
})

