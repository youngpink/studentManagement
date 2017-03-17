/**
 * Created by yp on 17-3-15.
 */

const Tool = require('../../tool').Tool;

$("body").on('blur', '#numbers', (e) => {
    if(!Tool.numbersCheck(e.target.value)){
        e.target.value = '';
    }
});



$("body").on('submit', 'formNumbers', (event) => {
    if(!Tool.numbersCheck($('form #numbers').val())){
        event.preventDefault();
    }
});

$("#submitNumbers").click((event) => {
    if(!Tool.numbersCheck($('form #numbers').val())){
        alert('请检查输入是否正确！')
    }else{
        let dataPut = {
            numbers : $('form #numbers').val()
        };

        $.post("/printScore",dataPut, (data) => {
            // document.location.assign('/score/' + data);
            let result =  '<pre>'+ data + '<button type="button" id="score" class="btn btn-default">返回主菜单</button>' +'<pre>'
            $('#display').html(result);
        });
    }
});

$("body").on('click', 'button#score', () => {
    document.location.assign('/');
});
