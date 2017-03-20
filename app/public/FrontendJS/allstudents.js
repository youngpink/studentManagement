(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by yp on 17-3-16.
 */
const Tool = require('../../tool').Tool;

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

    if(!Tool.nameCheck($('form #name').val()) || !Tool.scoreCheck($('form #math').val())
        || !Tool.scoreCheck($('form #chinese').val()) || !Tool.scoreCheck($('form #english').val()) || !Tool.scoreCheck($('form #programing').val())){
        alert('请检查输入是否正确！');

    }else{

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
    }


});

$('button#delete').click((e)=>{

    if (confirm("你确定删除吗？")) {
        $.post('./delete', {number : e.target.getAttribute('data-number')}, (data)=>{

            if(data != '-1'){
                e.target.parentNode.parentNode.style.display='none';
            }
        });
    }


});
},{"../../tool":2}],2:[function(require,module,exports){
/**
 * Created by yp on 17-3-8.
 */

'use strict';

class Tool{

    static checkScoreStringA(string){

        let reg = /^[\u4E00-\u9FFF]{2,}(,\s[0-9]+)(,\s[\u4E00-\u9FFF+])(,\s[0-9]+)(,\s[\u4E00-\u9FFF]{2}:\s\d{1,2}){4}$/;

        return reg.test(string);
    }

    static checkScoreStringB(string){

        let reg = /^[\u4E00-\u9FFF]{2,}(,\s[0-9]+)(,\s[\u4E00-\u9FFF]{2}:\s\d{1,2}){4}$/;

        return reg.test(string);
    }

    static checkNumberString(string){

        let reg = /^([0-9]+)(,\s[0-9]+)*$/;

        return reg.test(string);
    }

    static stringToArray(string){

        let tempArray = string.split(', ');

        return tempArray.map(function(element){
            return element.indexOf(':') === -1 ? element : parseInt(element.split(': ')[1]);
        })

    }

    static  nameCheck(value){
        let reg = /^[\u4E00-\u9FFF]{2,}$/;
        return reg.test(value);
    }

    static numberCheck(value){
        let reg = /^[0-9]{3}$/;
        return reg.test(value);
    }

    static scoreCheck(value){
        let reg = /^[0-9]{1,2}$/;
        return reg.test(value);
    }

    static numbersCheck(value){
        let reg = /^([0-9]+)(,\s[0-9]+)*$/;

        return reg.test(value);
    }

}

module.exports.Tool = Tool;

},{}]},{},[1]);
