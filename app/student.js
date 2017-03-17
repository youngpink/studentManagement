/**
 * Created by yp on 17-3-7.
 */

'use strict';

class Student{

    constructor(name, number, score, nationality = '', klass = '') {

        this.name = name;
        this.number = number;
        this.nationality = nationality;
        this.klass = klass;
        this.score = score;
        this.total = this.score.reduce((e1, e2) => e1 + e2);
        this.average = Math.round(this.total * 10 / this.score.length) / 10;

    }

    setName(name){
        this.name = name;
    }

    setNationality(nationality){
        this.nationality = nationality;
    }

    setKlass(klass){
        this.klass = klass;
    }

    setScore(score){
        let scoreNew = score.map((e) => {return parseInt(e)});
        this.score = scoreNew;
        this.total = this.score.reduce((e1, e2) => e1 + e2);
        this.average = Math.round(this.total * 10 / this.score.length) / 10;
    }

    setAll(name, score, nationality, klass){
        this.setName(name);
        this.setNationality(nationality);
        this.setKlass(klass);
        this.setScore(score);
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
