import {fireEvent,render,screen} from "@testing-library/react";
import Main from './Main'

import { shallow } from 'enzyme';

test("heading", ()=>{
    render(<Main />)
    const heading = screen.getByText(/European Cities/);
    expect (heading).toBeInTheDocument()
})

test("button is rendered",()=>{
    render(<Main/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test("button text",()=>{
    render(<Main/>)
    const button = screen.getByRole('button')
    expect(button.textContent).toBe("GET")
})

{/*
    test('calling function when clicked', () => {
    sinon.spy(Main.prototype, 'getCityData');
    const wrapper = mount(<Main/>);
    wrapper.find('#btn').simulate('click');
    expect(spy).toHaveBeenCalled() //adept assertion to the tool you use
  });

  describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  test("button text",()=>{
    render(<Main/>)
    const button = screen.getByRole('button')
    fireEvent.click(button);
    expect()

     test("button text",()=>{
    render(<Main/>)
    const button = screen.getByRole('button')
    const funct = screen.findAllByTitle('getCityData')
    fireEvent.click(button);
    expect(funct).toHaveBeenCalled()
})
})
 */}