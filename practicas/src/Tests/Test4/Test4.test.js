import Test4 from "./Test4";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test4', () => {

    

    test('Must get Th', () => {

        const { result } = renderHook(() => Test4());

        expect( result.current.getDay({ day: 'Mo', number: 3}) ).toStrictEqual('Th');
    });

    test('Must get Su', () => {

        const { result } = renderHook(() => Test4());

        expect( result.current.getDay({ day: 'Mo', number: 6}) ).toStrictEqual('Su');
    });

    test('Must get Fr', () => {

        const { result } = renderHook(() => Test4());

        expect( result.current.getDay({ day: 'We', number: 30}) ).toStrictEqual('Fr');
    });

});