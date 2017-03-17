/**
 * Created by yp on 17-3-7.
 */
'use strict';

class ScoreViewModel{

    constructor(students = []){
        this.students = students;
        this.average = this.students.length === 0 ? 0 : this.calculateAverage();
        this.median = this.students.length === 0 ? 0 : this.calculateMedian();
    }

    calculateAverage(){

        let total = this.students.map(student => student.total).reduce((a, b) => a + b);
        let temp =  total / this.students.length;
        return Math.round(temp * 10) / 10;

    }

    calculateMedian(){

        let totals = this.students.map(function(student){
            return student.total;
        });

        totals.sort();

        return totals.length % 2 === 0
             ? (totals[totals.length/2] + totals[totals.length/2 - 1]) / 2
             : totals[(totals.length - 1) / 2];

    }

    static joinStudentString(student){

        let infoArray = [];

        infoArray.push(student.name);
        infoArray = infoArray.concat(student.score);
        infoArray.push(student.average);
        infoArray.push(student.total);


        return infoArray.join('|');
    }

    joinScoreString(){

        // if(this.students.length === 0){
        //     return '当前系统无任何该学生的信息';
        // }

        let scoreString = '成绩单\n'
            + '姓名|数学|语文|英语|编程|平均分|总分\n'
            + '========================\n';

        this.students.forEach(function(student){
            scoreString += ScoreViewModel.joinStudentString(student) + '\n';

        });

        scoreString +='========================\n'
            + '全班总分平均数：' + this.average + '\n'
            + '全班总分中位数：' + this.median + '\n';

        return scoreString;
    }
}

module.exports.ScoreViewModel = ScoreViewModel;
