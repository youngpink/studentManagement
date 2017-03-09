/**
 * Created by yp on 17-3-7.
 */

'use strict';

class Dataset{

    constructor(){

        this.students = [];
        this.ids = [];
    }

    addStudent(student){

        if(this.ids.indexOf(student.number) === -1){
            this.students.push(student);
            this.ids.push(student.number);
            return true;
        }

        return false;
    }

    findStudent(numbers){
        return this.students.filter(function(student){
            return numbers.indexOf(student.number) !== -1 ;
        })
    }
}

module.exports.Dataset = Dataset;