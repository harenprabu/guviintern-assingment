//validation
$(window).ready(() => {
    $.ajax({
        url: '/guviintern-main/php/validation.php',
        type: 'GET',
        data: {},
        success: function (data) {
            if (data.code === true) {
                alert(data.msg);
                location.href = "/guviintern-main/home.html"
            }
        },
        dataType: 'json',
    })
})
