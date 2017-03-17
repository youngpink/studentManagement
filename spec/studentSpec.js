/**
 * Created by yp on 17-3-7.
 */

const Student = require('../app/student').Student;

describe("test Student", function() {


    it("should return average score", function() {

        const score = [75, 95, 80, 80];

        const student = new Student('张三', '001', score, 'Han', 2);
        const result = student.average;
        const expecText = 82.5;

        expect(result).toBe(expecText);

    });

    it("should return totol score", function() {

        const score = [75, 95, 80, 80];

        const student = new Student('张三', '001', score);
        const result = student.total;
        const expecText = 330;

        expect(result).toBe(expecText);

    });

    it('shoule update student', () => {

        let student = new Student('张三', '001', [75, 95, 80, 80]);

        const name = '李四';
        const nationality = '汉族';
        const klass = '';
        const score = ['1', '1', '0', '1'];

        student.setAll(name, score, nationality, klass);

        const nameRes = student.name;
        const nationalityRes = student.nationality;
        const klassRes = student.klass;
        const scoreRes = student.score;
        const totalRes = student.total;
        const averageRes = student.average;

        const result = [nameRes, nationalityRes, klassRes, scoreRes];

        const expectText = [name, nationality, klass, [1,1,0,1]];

        expect(result).toEqual(expectText);

    })
});