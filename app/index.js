/**
 * Created by yp on 17-3-14.
 */

const express = require('express');
const bodyParser = require('body-parser');
const Student = require('../app/student').Student;
const Dataset = require('../app/dataset').Dataset;
const ScoreViewModel = require('../app/scoreViewModel').ScoreViewModel;
const Tool = require('./tool').Tool;

let dataset = new Dataset();

const score = [75, 95, 80, 80];
const zhangsan = new Student('张三', '001', score, 'Han', 2);
const lisi = new Student('李四', '002', score, 'Han', 2);
dataset.addStudent(zhangsan);
dataset.addStudent(lisi);

const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000, () => {
    console.log("listen 3000 now");
});

app.get('/', (req, res) => {
    res.render('menu',{ishidden: 'hidden'});
});

app.post('/choose', (req, res) => {
    res.send(req.body.choose);
});

app.get('/exit', (req, res) => {
    res.send('退出啦');
});

app.get('/add', (req, res) => {
    res.render('studentInfo');
});

app.get('/print', (req, res) => {
    res.render('numberInfo');
});

app.get('/change', (req, res) => {
    dataset.students.length === 0
     ? res.send('no students')
     : res.render('allstudents', {students : dataset.students});
});

app.post('/addStudent', (req, res) => {

    let flag = dataset.addStudent(Student.studentInit(req));
    let name =  flag ? req.body.name : '';

    res.send(name);

});

app.get('/addSuccess/:name', (req, res) => {
    res.render('addSuccess', {name: req.params.name});
});

app.post('/printScore', (req, res) => {

    let arg = Tool.stringToArray(req.body.numbers);
    let students = dataset.findStudent(arg);
    let scoreViewModel = new ScoreViewModel(students);

    let result = scoreViewModel.joinScoreString();
    res.send(result);

});

app.post('/menu', (req, res) => {
    res.render('menu',{ishidden: ''});
});

app.post('/delete', (req, res) => {
    res.send(dataset.deleteStudent(req.body.number).toString());
});

app.post('./change', (req, res) => {


});

