/**
 * Created by yp on 17-3-8.
 */
const Tool = require('../app/tool').Tool;

describe("test Tool", function() {

    it("test checkScoreStringA, it should return false if the string not like '姓名, 学号, 民族, 班级, 学科: 成绩, ...'\n" +
        "the name should be at least 2 chinese characters, the number should contain digits only, " +
        "the nationality should be chinese, course name should be 2 chinese characters, " +
        "grade should be 0 to 100, and every split character should be followed by a space charecter.", function () {

        const string = '张三, 001, 汉, 2, 数学: 75, 语文: 95, 英语: 80, 编程: 80';

        const result = Tool.checkScoreStringA(string);

        const expecText = true;

        expect(result).toEqual(expecText);

    });

    it("test checkScoreStringB, it should return true if the string like '姓名, 学号, 学科: 成绩, ...'\n" +
        "details should refer to checkScoreStringA", function () {

        const string = '张三, 001, 数学: 75, 语文: 95, 英语: 80, 编程: 80';

        const result = Tool.checkScoreStringB(string);

        const expecText = true;

        expect(result).toEqual(expecText);

    });

    it("test checkNumberString, it should return true if the string like '学号, 学号, ...'\n" +
        "the number should contain digits only and be split by ',', " +
        "and every split character should be followed by a space charecter.", function () {

        const string = '001, 002';

        const result = Tool.checkNumberString(string);

        const expecText = true;

        expect(result).toEqual(expecText);

    });

    it("test stringToArray", function () {

        const string = '张三, 001, 数学: 75, 语文: 95, 英语: 80, 编程: 80';

        const result = Tool.stringToArray(string);

        const expecText = ['张三', '001', 75, 95, 80, 80];

        expect(result).toEqual(expecText);

    });

    it("test stringToArray", function () {

        const string = '001, 002';

        const result = Tool.stringToArray(string);

        const expecText = ['001', '002'];

        expect(result).toEqual(expecText);

    });
});