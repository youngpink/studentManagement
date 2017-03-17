/**
 * Created by yp on 17-3-14.
 */

const Tool = require('../../tool').Tool;

$("body").on('blur', '#name', (e) => {
    if(!Tool.nameCheck(e.target.value)){
        e.target.value = '';
    }
});

$("body").on('blur', '#number', (e) => {
    if(!Tool.numberCheck(e.target.value)){
        e.target.value = '';
    }
});

$("body").on('blur', '.score', (e) => {
    if(!Tool.scoreCheck(e.target.value)){
        e.target.value = '';
    }
});

$("#submit").click((event) => {
    if(!Tool.nameCheck($('form #name').val()) || !Tool.numberCheck($('form #number').val()) || !Tool.scoreCheck($('form #math').val())
        || !Tool.scoreCheck($('form #chinese').val()) || !Tool.scoreCheck($('form #english').val()) || !Tool.scoreCheck($('form #programing').val())){
        alert('请检查输入是否正确！')
    }else{
        let data = {
            name : $('#name').val(),
            number : $('#number').val(),
            math : $('#math').val(),
            chinese : $('#chinese').val(),
            english : $('#english').val(),
            programing : $('#programing').val(),
            klass : $('#klass').val(),
            nationality : $('#nationality').val()
        };

        $.post("/addStudent",data, (data) => {
            data != '' ? document.location.assign('/addSuccess/' + data)
                 : document.location.assign('/add');
        });
    }
});
