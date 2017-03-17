/**
 * Created by yp on 17-3-7.
 */

'use strict';

class Student{

    constructor(name, number, score, nationality = '', klass = null) {

        this.name = name;
        this.number = number;
        this.nationality = nationality;
        this.klass = klass;
        this.score = score;
        this.total = score.reduce((e1, e2) => e1 + e2);
        this.average = this.total / this.score.length;

    }



    static studentInit(req){

        let name = req.body.name;
        let number = req.body.number;
        let nationality = req.body.nationality;
        let klass = req.body.klass;
        let math = parseInt(req.body.math);
        let chinese = parseInt(req.body.chinese);
        let english = parseInt(req.body.english);
        let programing = parseInt(req.body.programing);

        return klass === '' || nationality === ''
            ? new Student(name, number, [math, chinese, english, programing])
            : new Student(name, number, [math, chinese, english, programing], nationality, klass);

    }

}

module.exports.Student = Student;
