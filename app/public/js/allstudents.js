/**
 * Created by yp on 17-3-16.
 */
$('button#return').click(()=>{
    document.location.assign('/');
});

$('button#change').click((e)=>{
    // $.post('./change', {number : e.target.getAttribute('data-number')}, (data)=>{
    //
    //
    // });
    $('#myModal').modal('show');

});

$('button#delete').click((e)=>{

    $.post('./delete', {number : e.target.getAttribute('data-number')}, (data)=>{

        if(data != '-1'){
            e.target.parentNode.parentNode.style.display='none';
        }
    });

});