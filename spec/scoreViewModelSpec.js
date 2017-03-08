/**
 * Created by yp on 17-3-7.
 */

const ScoreViewModel = require('../app/ScoreViewModel').ScoreViewModel;

describe("test ScoreViewModel", function() {

    it("test property: total, median", function() {

        const zhangsan = new Student('张三', '001', 'Han', 2, [75, 95, 80, 80]);
        const lisi = new Student('李四', '002', 'Han', 2, [85, 80, 70, 90]);

        const scoreViewModel = new ScoreViewModel([zhangsan, lisi]);

        const average = scoreViewModel.average;
        const median = scoreViewModel.median;

        const averageExpect = 327.5;
        const medianExpect = 327.5;

        expect(average).toEqual(averageExpect);
        expect(average).toEqual(medianExpect);

    });
    
});
