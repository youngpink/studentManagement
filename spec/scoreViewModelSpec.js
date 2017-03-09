/**
 * Created by yp on 17-3-7.
 */

const Student = require('../app/student').Student;
const ScoreViewModel = require('../app/scoreViewModel').ScoreViewModel;

describe("test ScoreViewModel", function() {

    it("test property: total, median, if students is not empty, it should return digit which are not zero", function() {

        const zhangsan = new Student('张三', '001', [75, 95, 80, 80], 'Han', 2);
        const lisi = new Student('李四', '002', [85, 80, 70, 90], 'Han', 2);

        const scoreViewModel = new ScoreViewModel([zhangsan, lisi]);

        const average = scoreViewModel.average;
        const median = scoreViewModel.median;
        const result = [average, median];

        const expecText = [327.5, 327.5];

        expect(result).toEqual(expecText);

    });

    it("test property: total, median, if students is empty, it should return zero", function() {

        const zhangsan = new Student('张三', '001', [75, 95, 80, 80], 'Han', 2);

        const scoreViewModel = new ScoreViewModel();

        const average = scoreViewModel.average;
        const median = scoreViewModel.median;

        const averageExpect = 0;
        const medianExpect = 0;

        expect(average).toEqual(averageExpect);
        expect(average).toEqual(medianExpect);

    });

    it("test joinStudentString, should return student name and scores joined with |", function() {

        const zhangsan = new Student('张三', '001', [75, 95, 80, 80], 'Han', 2);

        const scoreViewModel = new ScoreViewModel();

        const result = ScoreViewModel.joinStudentString(zhangsan);

        const expectText = '张三|75|95|80|80|82.5|330';

        expect(result).toEqual(expectText);

    });

    it("test joinScoreString, it should return a string", function() {

        const zhangsan = new Student('张三', '001', [75, 95, 80, 80], 'Han', 2);
        const lisi = new Student('李四', '002', [85, 80, 70, 90], 'Han', 2);

        const scoreViewModel = new ScoreViewModel([zhangsan, lisi]);

        const result = scoreViewModel.joinScoreString();

        const expectText = '成绩单\n'
                         + '姓名|数学|语文|英语|编程|平均分|总分\n'
                         + '========================\n'
                         + '张三|75|95|80|80|82.5|330\n'
                         + '李四|85|80|70|90|81.25|325\n'
                         + '========================\n'
                         + '全班总分平均数：327.5\n'
                         + '全班总分中位数：327.5\n';

        expect(result).toEqual(expectText);

    });

    it("test joinScoreString, it should return a string", function() {

        const zhangsan = new Student('张三', '001', [75, 95, 80, 80], 'Han', 2);

        const scoreViewModel = new ScoreViewModel([zhangsan]);

        const result = scoreViewModel.joinScoreString();

        const expectText = '成绩单\n'
            + '姓名|数学|语文|英语|编程|平均分|总分\n'
            + '========================\n'
            + '张三|75|95|80|80|82.5|330\n'
            + '========================\n'
            + '全班总分平均数：330\n'
            + '全班总分中位数：330\n';

        expect(result).toEqual(expectText);

    });

});
