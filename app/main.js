/**
 * Created by yp on 17-3-9.
 */
'use strict';

const repl = require('repl');
const Student = require('../app/student').Student;
const Dataset = require('../app/dataset').Dataset;
const Tool = require('./tool').Tool;
const ScoreViewModel = require('../app/scoreViewModel').ScoreViewModel;

let dataset = new Dataset();
let status = 31;

console.log('1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：\n');

const r = repl.start({
    prompt: '请输入 > ',
    eval: myEval,
    writer: myWriter
});

function myEval(cmd, context, filename, callback) {
    callback(null, cmd);
}

function myWriter(output) {
    // input = output.match(/\((.+)\n\)/i)[1]
    let inputString = output.replace(/[\r\n]/g, '');
    let flag = false;
    let result = "";
    switch(status){
        case 31:
            if( inputString === '1') {
                result = '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
                status = 11;
            } else if ( inputString === '2' ) {
                result = '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
                status = 21;
            } else{
                status = 32;
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
            break;
        case 32:
            if( inputString === '1' ) {
                result = '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
                status = 11;
            } else if ( inputString === '2' ) {
                result = '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
                status = 21;
            } else if (inputString === '3'){
                process.exit(0);
            } else{
                status = 32;
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            }
            break;
        case 11:
            flag = Tool.checkScoreStringA(inputString);
            if(flag){
                addStudent(inputString);
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
                status = 32;
            }else{
                status = 12;
                result =  '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
            }
            break;
        case 12:
            flag = Tool.checkScoreStringB(inputString);
            if(flag){
                addStudent(inputString);
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
                status = 32;
            }else{
                status = 12;
                result =  '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：';
            }
            break;
        case 21:
            flag = Tool.checkNumberString(inputString);
            if(flag){
                printScores(inputString);
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
                status = 32;
            }else{
                status = 22;
                result = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
            }
            break;
        case 22:
            flag = Tool.checkNumberString(inputString);
            if(flag){
                printScores(inputString);
                result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
                status = 32;
            }else{
                status = 22;
                result = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
            }
            break;
        default:
            status = 32;
            result = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
            break;

    }
    return result;
}

function addStudent(inputString){

    let arg = Tool.stringToArray(inputString);

    let student = arg.length === 8 ? new Student(arg[0], arg[1], [arg[4], arg[5], arg[6], arg[7]], arg[2], arg[3])
        : new Student(arg[0], arg[1], [arg[2], arg[3], arg[4], arg[5]]);

    dataset.addStudent(student)
        ? console.log('学生' + student.name + '的成绩被添加')
        : console.log('学生添加失败,请检查信息');

}

function printScores(inputString){

    let arg = Tool.stringToArray(inputString);

    let students = dataset.findStudent(arg);

    const scoreViewModel = new ScoreViewModel(students);

    const result = scoreViewModel.joinScoreString();

    console.log(result);
}



