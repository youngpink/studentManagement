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
});