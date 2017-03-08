/**
 * Created by yp on 17-3-7.
 */

// 'use strict';
//
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// // rl.on('resume', () => {
// //     console.log('Readline resumed.');
// // });
// // });
// rl.on('line', (input) => {
//     console.log(`Received: ${input}`);
// });

// rl.question('1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：', (choose) => {
//
//     //console.log(`Thank you for your valuable feedback: ${choose}`);
//     switch(choose){
//         case 1:
//             addStudent();
//             break;
//         case 2:
//             printScores();
//             break;
//         default:
//
//     }
//
//     rl.close();
// });

// var readline = require('readline'),
//     rl = readline.createInterface(process.stdin, process.stdout);
//
// rl.setPrompt('OHAI> ');
// rl.prompt();
//
// rl.on('line', function(line) {
//     switch(line.trim()) {
//         case 'hello':
//             console.log('world!');
//             break;
//         default:
//             console.log('Say what? I might have heard `' + line.trim() + '`');
//             break;
//     }
//     rl.prompt();
// }).on('close', function() {
//     console.log('Have a great day!');
//     process.exit(0);
// });

var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        log('Got it! Your answer was: "', answer, '"');
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();


