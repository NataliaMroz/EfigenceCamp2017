function checkNumber(numberPin) {
    return !isNaN(parseInt(numberPin), 10);
}

$(function() {
    // ten kod zostanie załadowany po dodaniu DOM

    $('#login-form').on('submit', function (event) {
        event.preventDefault();
        const password = $('#password');
        const hideLogin = $('#hideLogin');
        //const validation = password.val();


        // if (! validation) {
        //     alert('Błędny PIN');
        //     return;
        // }
        //

        $.ajax({
            type: "post",
            data: {
                login: hideLogin.val(),
                password: password.val()
            },
            url: "https://efigence-camp.herokuapp.com/api/login"
        }).done(function (response) {
            console.log('success');
            console.log(response);

            $('#password').removeClass('warning');
            window.location.href = "main.html";
        }).fail(function (response) {
            console.log('error');
            console.log(response);

            $('#password').addClass('warning');
        });

    });


    $('#login-toggle').on('click', function (event) {
        event.preventDefault();
        $('#login').hide();
        $('#hideLogin').removeClass('hide');
    });


});