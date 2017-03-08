/**
 * Created by yp on 17-3-7.
 */

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：', (choose) => {

    //console.log(`Thank you for your valuable feedback: ${choose}`);
    switch(choose){
        case 1:
            addStudent();
            break;
        case 2:
            printScores();
            break;
        default:

    }

    rl.close();
});


