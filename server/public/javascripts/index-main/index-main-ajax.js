$(function () {
    $("#signup-btn").click(function (event) {
        event.preventDefault();
        var url = '/signup',
            username =  $("#username").val(),
            email = $('#email').val(),
            password = $("#password").val(),
            data = {email: email, password: password};
        $.post(url, data, function (data) {
            if(data) {
                window.location.href = data.url;
            }else{
                alert(data);
            }
        });
    })

    $("#login-btn").click(function (event) {
        event.preventDefault();
        var url = '/login',
            email = $('#email').val(),
            password = $("#password").val(),
            data = {email: email, password: password};
        $.post(url, data, function (data) {
            if(data) {
                window.location.href = data.url;
            }else{
                alert(data);
            }
        });
    })



})

