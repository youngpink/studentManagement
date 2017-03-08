/**
 * Created by yp on 17-3-8.
 */

'use strict';

class Tool{

    static checkScoreStringA(string){

        let reg = /^[\u4E00-\u9FFF]{2,}(,\s[0-9]+)(,\s[\u4E00-\u9FFF+])(,\s[0-9]+)(,\s[\u4E00-\u9FFF]{2}:\s\d{1,2}){4}$/;

        return reg.test(string);
    }

    static checkScoreStringB(string){

        let reg = /^[\u4E00-\u9FFF]{2,}(,\s[0-9]+)(,\s[\u4E00-\u9FFF]{2}:\s\d{1,2}){4}$/;

        return reg.test(string);
    }

    static checkNumberString(string){

        let reg = /^([0-9]+)(,\s[0-9]+)*$/;

        return reg.test(string);
    }


}

module.exports.Tool = Tool;
