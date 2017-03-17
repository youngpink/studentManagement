/**
 * Created by yp on 17-3-16.
 */

$('button#return').click(()=>{
    document.location.assign('/');
});

$('button#change').click((e)=>{

    let obj =  $(e.target);
    let trObj = $(obj).parent().parent();
    let name = $(trObj).children().eq(0).html();
    let number = $(trObj).children().eq(1).html();
    let nationality = $(trObj).children().eq(2).html();
    let klass = $(trObj).children().eq(3).html();
    let math = $(trObj).children().eq(4).html();
    let chinese = $(trObj).children().eq(5).html();
    let english = $(trObj).children().eq(6).html();
    let programing = $(trObj).children().eq(7).html();

    $('#myModal').modal('show');
    $('#myModal #name').val(name);
    $('#myModal #nationality').val(nationality);
    $('#myModal #klass').val(klass);
    $('#myModal #math').val(math);
    $('#myModal #chinese').val(chinese);
    $('#myModal #english').val(english);
    $('#myModal #programing').val(programing);
    $('#myModal #save').data('num', number);

    let index = $(trObj).index();
    $('#myModal #save').data('idx', index);
});

$('button#save').click(() => {
    let name = $('#myModal #name').val();
    let nationality = $('#myModal #nationality').val();
    let klass = $('#myModal #klass').val();
    let math = $('#myModal #math').val();
    let chinese = $('#myModal #chinese').val();
    let english = $('#myModal #english').val();
    let programing = $('#myModal #programing').val();

    let number = $('#myModal #save').data('num');
    let index = $('#myModal #save').data('idx');

    let data = {
        name : name,
        number : number,
        nationality : nationality,
        klass : klass,
        math : math,
        chinese : chinese,
        english : english,
        programing : programing

    }

    $.post('./update', data, (data)=>{
        if(data == true){

          let trObj = $('table').eq(0).children().eq(index);

          $(trObj).children().eq(0).html(name);
          $(trObj).children().eq(2).html(nationality);
          $(trObj).children().eq(3).html(klass);
          $(trObj).children().eq(4).html(math);
          $(trObj).children().eq(5).html(chinese);
          $(trObj).children().eq(6).html(english);
          $(trObj).children().eq(7).html(programing);

          window.location.reload();
        }
    });


});

$('button#delete').click((e)=>{

    $.post('./delete', {number : e.target.getAttribute('data-number')}, (data)=>{

        if(data != '-1'){
            e.target.parentNode.parentNode.style.display='none';
        }
    });

});