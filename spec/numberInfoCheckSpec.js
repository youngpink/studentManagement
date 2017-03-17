/**
 * Created by yp on 17-3-15.
 */
const numberInfo = require('../app/tool').Tool;

describe('test numbersCheck', () => {

    it("should return true if the string like '学号, 学号, ...'\n" +
        "the number should contain digits only and be split by ', '", function () {
        const numbers = '001, 002';
        const result = numberInfo.numbersCheck(numbers);
        const expectText = true;
        expect(result).toEqual(expectText);

    });

    it("should return false if it ends with any none-digit-character", function () {
        const numbers = '001,';
        const result = numberInfo.numbersCheck(numbers);
        const expectText = false;
        expect(result).toEqual(expectText);

    });
});
