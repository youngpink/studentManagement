/**
 * Created by yp on 17-3-7.
 */

'use strict';

class Dataset{

    constructor(){

        this.students = [];
    }

    addStudent(student){
        this.students.push(student);
    }

    findStudent(numbers){
        return this.students.filter(function(student){
            return numbers.indexOf(student.number) !== -1 ;
        })
    }
}

module.exports.Dataset = Dataset;