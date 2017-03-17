/**
 * Created by yp on 17-3-7.
 */

const Student = require('../app/student').Student;
const Dataset = require('../app/dataset').Dataset;

describe("test Dataset", function() {

    it("test addStudent, add two students, should return two students", function() {

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

    it("test addStudent, add two students, should return one student", function() {

        const score = [75, 95, 80, 80];

        const zhangsan = new Student('张三', '001', score, 'Han', 2);
        const lisi = new Student('李四', '001', score, 'Han', 2);

        const dataset = new Dataset();

        dataset.addStudent(zhangsan);
        dataset.addStudent(lisi);

        const result = dataset.students;

        const expecText = [zhangsan];

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

    it("test deleteStudent, should return index if it exits before, and delete it", function() {

        const score = [75, 95, 80, 80];

        const zhangsan = new Student('张三', '001', score, 'Han', 2);
        const lisi = new Student('李四', '002', score, 'Han', 2);
        const wangwu = new Student('王五', '003', score, 'Han', 2);

        const dataset = new Dataset();

        dataset.addStudent(zhangsan);
        dataset.addStudent(lisi);
        dataset.addStudent(wangwu);

        const number = '001';
        const result = dataset.deleteStudent(number);
        const expecText = 0;

        expect(result).toEqual(expecText);

        const students = dataset.students;
        const expectText = [lisi, wangwu];
        expect(students).toEqual(expectText);

    });

    it("test deleteStudent, should return -1 if it not exits", function() {

        const score = [75, 95, 80, 80];

        const lisi = new Student('李四', '002', score, 'Han', 2);
        const wangwu = new Student('王五', '003', score, 'Han', 2);

        const dataset = new Dataset();

        dataset.addStudent(lisi);
        dataset.addStudent(wangwu);

        const number = '001';
        const result = dataset.deleteStudent(number);
        const expecText = -1;

        expect(result).toEqual(expecText);

        const students = dataset.students;
        const expectText = [lisi, wangwu];
        expect(students).toEqual(expectText);

    });


});
