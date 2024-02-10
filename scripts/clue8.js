$(document).ready(function () {
    $('#submitCode').click(() => {
        const value = $('#code').val();
        if (value == 106) {
            $('#incorrect').css("display", "none")
            $('#clue8').css("visibility", "hidden")
            $('#location').css("display", "block")
        } else {
            $('#incorrect').css("visibility", "visible")
        }

    })
})
