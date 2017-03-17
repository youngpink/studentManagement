(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
