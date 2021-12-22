import Test5 from "./Test5";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test5', () => {

    

    test('Must set Numbers', () => {

        const { result } = renderHook(() => Test5());

        act(() => {
            result.current.onSetNumbers([1,2,3,4,5]);
        });

        expect( result.current.numbers ).toStrictEqual([1,2,3,4,5]);
    });

    test('Must check if is capicua', () => {

        const { result } = renderHook(() => Test5());

        act(() => {
            result.current.onSetNumbers([1,2,3,4,5]);
        });

        expect( result.current.isCapicua() ).toBe(false);

        act(() => {
            result.current.onSetNumbers([1,2,3,2,1]);
        });

        expect( result.current.isCapicua() ).toBe(true);

        act(() => {
            result.current.onSetNumbers([1,2,3,4,3,2,1]);
        });

        expect( result.current.isCapicua() ).toBe(true);
    });

    test('Must check the quantity of numbers by parameter', () => {

        const { result } = renderHook(() => Test5());

        act(() => {
            result.current.onSetNumbers([1,2,2,2,5]);
        });

        expect( result.current.getQuantityOfNumbers(2) ).toBe(3);

        act(() => {
            result.current.onSetNumbers([1,2,3,2,1]);
        });

        expect( result.current.getQuantityOfNumbers(1) ).toBe(2);

        act(() => {
            result.current.onSetNumbers([1,2,3,4,3,2,1]);
        });

        expect( result.current.getQuantityOfNumbers(8) ).toBe(0);
    });

});