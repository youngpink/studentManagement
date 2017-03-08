/**
 * Created by yp on 17-3-7.
 */
'use strict';

class ScoreViewModel{

    constructor(students){
        this.students = students;
        this.setAverage();
        this.setMedian();
    }

    setAverage(){

        let total = this.students.reduce((stuA, stuB) => stuA.total + stuB.total);
        this.average = total / this.students.length;
    }

    setMedian(){

        let totals = this.students.map(function(student){
            return student.total;
        });

        totals.sort();

        this.median = totals.length % 2 === 0
            ? (totals[totals.length/2] + totals[totals.length/2 + 1]) / 2
            : totals[(totals.length + 1) / 2];

    }
}

module.exports.ScoreViewModel = ScoreViewModel;
