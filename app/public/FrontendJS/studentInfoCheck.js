(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
