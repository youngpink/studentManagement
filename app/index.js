/**
 * Created by yp on 17-3-14.
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000, function(){
    console.log("listen 3000 now");

});

app.get('/', (req, res) => {
    res.render('./menu.ejs',{ishidden: 'hidden'});
});

app.post('/chooseFromTwo', (req, res) => {

    let choose = req.body.choose;

    choose === 'exit' ? res.end() : res.render('./' + choose + '.ejs');
});

app.post('/addStudent', (req, res) => {
    let name = req.body.name;
    true ? res.render('./addSuccess.ejs', {name: name}) : res.render('./studentInfo.ejs');
});

app.post('/printScore', (req, res) => {
    let scoreString = '哈哈';
    true ? res.render('./scores.ejs', {scoreString: scoreString}) : res.render('./numberInfo.ejs');
});

app.post('/menu', (req, res) => {
    res.render('./menu.ejs',{ishidden: ''});
});





