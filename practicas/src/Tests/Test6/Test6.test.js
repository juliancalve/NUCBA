import Test6 from "./Test6";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test6', () => {

    

    test('Must set matrix', () => {

        const { result } = renderHook(() => Test6());

        act(() => {
            result.current.onSetMatrix('cam a r    e    ro               ');
        });

        expect( result.current.matrix ).toStrictEqual([['c'],['a'],['m'],['a'],['r'],['e'],['r'],['o']]);
    });

    test('Must get position of character', () => {

        const { result } = renderHook(() => Test6());

        act(() => {
            result.current.onSetMatrix('   pana d e r i a');
        });

        expect( result.current.matrix[result.current.getPositionOfCharacter('p')][0] ).toStrictEqual('p');
        expect( result.current.matrix[result.current.getPositionOfCharacter('a')][0] ).toStrictEqual('a');
        expect( result.current.matrix[result.current.getPositionOfCharacter('n')][0] ).toStrictEqual('n');
    });

    test('Must transform matrix to upper and lower case', () => {

        const { result } = renderHook(() => Test6());

        act(() => {
            result.current.onSetMatrix(' f iam bres ');
        });

        act(() => {
            result.current.transformMatrixToUpperCaseAndLowerCase();
        });

        expect( result.current.matrix ).toStrictEqual([['F'],['i'],['A'],['m'],['B'],['r'],['E'],['s']]);
    });

   
});