import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Button from './Button';

const mockCallback = jest.fn();
const defaultProps = {
  active: true,
  action: true,
  block: true,
  color: 'primary',
  disabled: true,
  download: 'downloadTest',
  gradient: 'peach',
  role: 'buttom',
  type: 'button',
  outline: true,
  rounded: true,
  circle: true,
  floating: true,
  flat: true,
  innerRef: 'refTest',
  onClick: mockCallback,
  size: 'sm',
  social: 'socialTest',
  tag: 'div',
  target: 'targetTest',
  className: 'testClassName'
};

const setup = (props = {}) => shallow(<Button {...props} />);

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const button = findByTestAttr(wrapper, 'button');
    expect(button.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  test('does not throw warnings with expected props', () => {
    checkProps(Button, defaultProps);
  });

  test('does not throw warnings with default props', () => {
    checkProps(Button, {});
  });

  test(`adds custom class passed as props`, () => {
    wrapper = setup({ className: 'testClassName' });

    checkClass(wrapper, 'testClassName');
  });

  test(`invokes callback function passed as a prop after clicking a button`, () => {
    wrapper = setup({ ...defaultProps });
    wrapper.simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test(`adds custom attributes passed as props`, () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.props()['data-custom-attr']).toBe('custom');
  });

  test('sets href', () => {
    wrapper = setup({ href: 'https://mdbootstrap.com/' });

    expect(wrapper.props()['href']).toBe('https://mdbootstrap.com/');
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });

    checkTag(wrapper, 'a');
  });

  describe('Disabled', () => {
    beforeEach(() => {
      wrapper = setup({ disabled: true });
    })
    
    test('adds disabled class', () => {
      checkClass(wrapper, 'disabled');
    })
    
    test('doesn`t render a waves ripple element', () => {
      expect(findByTestAttr(wrapper, 'waves').length).toBe(0);
    })
  })
});
