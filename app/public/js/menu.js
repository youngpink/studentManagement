/**
 * Created by yp on 17-3-16.
 */
$(document).ready(() => {
    $('button').click(() => {
        let choose = $('input[name="choose"]:checked').val();
        $.post("/choose",{choose: choose}, (data) => {

                document.location.assign('/' + choose);

        });
    });
});