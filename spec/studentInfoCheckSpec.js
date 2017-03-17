const studentInfo = require('../app/tool').Tool;

describe("test nameCheck", () => {
    it('should return true if it only contains chinese, and at least two words', () => {
        const name = '张三';
        const result = studentInfo.nameCheck(name);
        const expectText = true;
        expect(result).toEqual(expectText);
    });

    it('should return false if it is empty', () => {
        const name = '';
        const result = studentInfo.nameCheck(name);
        const expectText = false;
        expect(result).toEqual(expectText);
    });

    it('should return false if it is in english', () => {
        const name = 'tim';
        const result = studentInfo.nameCheck(name);
        const expectText = false;
        expect(result).toEqual(expectText);
    });

});

describe('test numberCheck', () => {

    it('should return true if it is 3-digits', () => {
        const number = '001';
        const result = studentInfo.numberCheck(number);
        const expectText = true;
        expect(result).toEqual(expectText);
    });

    it('should return false if it is empty', () => {
        const number = '';
        const result = studentInfo.numberCheck(number);
        const expectText = false;
        expect(result).toEqual(expectText);
    });

    it('should return false if it contains none-digit-character', () => {
        const number = '00w';
        const result = studentInfo.numberCheck(number);
        const expectText = false;
        expect(result).toEqual(expectText);
    });

});

describe('test scoreCheck', () => {

    it('should return true if it is between 0 and 99, and not contain any other charecters', () => {
        const score = '75';
        const result = studentInfo.scoreCheck(score);
        const expectText = true;
        expect(result).toEqual(expectText);

    });

    it('should return false if it is less than 0', () => {
        const score = '-1';
        const result = studentInfo.scoreCheck(score);
        const expectText = false;
        expect(result).toEqual(expectText);

    });

    it('should return false if it is more than 99', () => {
        const score = '100';
        const result = studentInfo.scoreCheck(score);
        const expectText = false;
        expect(result).toEqual(expectText);

    });

    it('should return false if it contains a dot', () => {
        const score = '78.1';
        const result = studentInfo.scoreCheck(score);
        const expectText = false;
        expect(result).toEqual(expectText);

    });

});