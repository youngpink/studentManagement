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

            let result = '<button type="button" id="score" class="btn btn-primary pull-right">主菜单</button>';
            result += '<table class="table table-hover text-left">'
                    + '<caption class="text-center"><h1>成绩单</h1></caption><tbody>'
                    + '<tr><th>姓名</th><th>数学</th><th>语文</th><th>英语</th><th>编程</th><th>平均分</th><th>总分</th></tr>';
            data.students.forEach( (student) => {
                result += '<tr><td>' + student.name + '</td><td>' + student.score[0] + '</td><td>' + student.score[1] + '</td>'
                    + '<td>' + student.score[2] + '</td><td>' + student.score[3] + '</td><td>' + student.average + '</td>'
                    + '<td>' + student.total + '</td></tr>';
            });
            result += '<tr><td colspan="2">全班总分平均数：</td><td colspan="5">' + data.average + '</td></tr>'+
                '<tr><td colspan="2">全班总分中位数：</td><td colspan="5">' + data.median + '</td></tr> </tbody> </table>';

            $('#display').html(result);
        });
    }
});

$("body").on('click', 'button#score', () => {
    document.location.assign('/');
});
