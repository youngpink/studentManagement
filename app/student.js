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

}

module.exports.Student = Student;
