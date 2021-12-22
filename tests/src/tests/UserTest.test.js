import { renderHook, act } from '@testing-library/react-hooks';
import UserTest from './UserTest';

describe('UserTest', () => {

    const users = [
        {
            name: 'pepe',
            age: 21
        },
        {
            name: 'sonya',
            age: 31
        },
        {
            name: 'joaquin',
            age: 40
        },
        {
            name: 'mauro',
            age: 26
        },
    ];

    test('Add one user', () => {
        const { result } = renderHook(() => UserTest());

        act(() => {
            result.current.addUser(users[0]);
        });

        expect( result.current.users ).toStrictEqual([ users[0] ]);
    });
    test('Add two user', () => {
        const { result } = renderHook(() => UserTest());

        act(() => {
            result.current.addUser(users[0]);
        });
        act(() => {
            result.current.addUser(users[3]);
        });

        expect( result.current.users ).toStrictEqual([ users[0], users[3] ]);
    });

    test('Add many user', () => {
        const { result } = renderHook(() => UserTest());

        act(() => {
            result.current.addManyUsers(users);
        });


        expect( result.current.users ).toStrictEqual(users);
    });

    test('Find by name', () => {
        const { result } = renderHook(() => UserTest());

        act(() => {
            result.current.addManyUsers(users);
        });

        const finded = result.current.findByName('sonya');


        expect( finded ).toBe(users[1]);
    });

    test('filter by age', () => {
        const { result } = renderHook(() => UserTest());

        act(() => {
            result.current.addManyUsers(users);
        });

        const finded = result.current.filterByAge(25);


        expect( finded.length ).toBe(3);
    });

});