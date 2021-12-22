import { shallow } from "enzyme";
import Button from "./Button";

describe('Button component test', () => {

    test('Tiene que estar en el snapshot', () => {
        const wrapper = shallow(<Button />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Tiene que contener el titulo que se le pasa por parametro', () => {
        const title = 'soy un titulo';
        const wrapper = shallow(<Button title={title} />);

        const button = wrapper.find('button');

        expect( button.text() ).toBe(title);

    });

    test('la suma tiene que coincidir', () => {

        const num1 = 3;
        const num2 = 2;
        const result = 5;

        expect( num1 + num2 ).toBe(result);
    });

    test('Checkear que la funcion se este llamando al clickear', () => {
        const title = 'titulo';
        const miFuncion = jest.fn();
        const wrapper = shallow(<Button title={title} handleClick={miFuncion} />);

        const button = wrapper.find('button');
        button.simulate('click');

        expect(miFuncion).toBeCalledTimes(1);
    });

});