import { renderHook, act } from '@testing-library/react-hooks';
import NumberProblems from './NumberProblems';

describe('NumberProblems', () => {

    test('Se tienen que agregar el numero 5', () => {
        const { result } = renderHook(() => NumberProblems());

        act(() => {
            result.current.addNumber(5);
        });

        expect( result.current.numbers ).toStrictEqual([5]);
    });
    test('Se tienen que agregar todos los numeros', () => {
        const { result } = renderHook(() => NumberProblems());

        act(() => {
            result.current.addNumber(1);
        });
        act(() => {
            result.current.addNumber(2);
        });
        act(() => {
            result.current.addNumber(3);
        });
        act(() => {
            result.current.addNumber(4);
        });

        expect( result.current.numbers ).toStrictEqual([1,2,3,4]);
    });

    test('Quiero el average', () => {
        const { result } = renderHook(() => NumberProblems());
        act(() => {
            result.current.addNumber(2);
        });
        act(() => {
            result.current.addNumber(2);
        });
        act(() => {
            result.current.addNumber(2);
        });
        act(() => {
            result.current.addNumber(2);
        });

        act(() => {
            result.current.getAverage();
        })

        expect( result.current.average ).toBe(2);

    })
});