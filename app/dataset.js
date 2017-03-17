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

        let student =  this.students.filter(function(student){
            return numbers.indexOf(student.number) !== -1 ;
        });

        return student;
    }

    deleteStudent(num){
        let numbers = this.students.map((student)=>{return student.number});
        let index = numbers.indexOf(num);
        if(index !== -1){
            this.students.splice(index, 1);
        }
        return index;
    }
}

module.exports.Dataset = Dataset;