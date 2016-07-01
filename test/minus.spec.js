import expect from 'expect';
import Minus from '../component/Minus'

describe('minus', () => {
    it('should get the correct result', () => {
        var expected = 3;
        var actual = Minus(8, 5);
        
        expect(actual).toEqual(expected);
    });
});