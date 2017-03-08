/**
 * Created by yp on 17-3-7.
 */

const Student = require('../app/student').Student;
const Dataset = require('../app/dataset').Dataset;

describe("test Dataset", function() {

    it("test addStudent, should return all students", function() {

        const score = [75, 95, 80, 80];

        const zhangsan = new Student('张三', '001', score, 'Han', 2);
        const lisi = new Student('李四', '002', score, 'Han', 2);

        const dataset = new Dataset();

        dataset.addStudent(zhangsan);
        dataset.addStudent(lisi);

        const result = dataset.students;

        const expecText = [zhangsan, lisi];

        expect(result).toEqual(expecText);

    });

    it("test findStudent, should return students in specific number set", function() {

        const score = [75, 95, 80, 80];

        const zhangsan = new Student('张三', '001', score, 'Han', 2);
        const lisi = new Student('李四', '002', score, 'Han', 2);
        const wangwu = new Student('王五', '003', score, 'Han', 2);

        const dataset = new Dataset();

        dataset.addStudent(zhangsan);
        dataset.addStudent(lisi);
        dataset.addStudent(wangwu);

        const numbers = ['001', '003'];
        const result = dataset.findStudent(numbers);
        const expecText = [zhangsan, wangwu];

        expect(result).toEqual(expecText);

    });
});
