/**
 * Created by yp on 17-3-14.
 */

const Tool = require('../../tool').Tool;

$("body").on('blur', '#name', (e) => {
    let obj = $(e.target);
    if(!Tool.nameCheck($(obj).val())){
        $(obj).parent().siblings('p').html('请输入至少两个汉字');
    }else{
        $(obj).parent().siblings('p').html('');
    }
});

$("body").on('blur', '#number', (e) => {
    let obj = $(e.target);
    if(!Tool.numberCheck($(obj).val())){
        $(obj).parent().siblings('p').html('请输入三位数字学号');
    }else{
        $(obj).parent().siblings('p').html('');
    }
});

$("body").on('blur', '.score', (e) => {
    let obj = $(e.target);
    if(!Tool.scoreCheck($(obj).val())){
        $(obj).parent().siblings('p').html('请输入0~99的分数');
    }else{
        $(obj).parent().siblings('p').html('');
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
