import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Input from './Input';

const setup = (props = {}) => shallow(<Input {...props} />);

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const input = findByTestAttr(wrapper, 'input');
    expect(input.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  test(`does not throw warnings with expected props`, () => {
    const expectedProps = {
      className: '',
      containerClass: '',
      disabled: false,
      error: '',
      filled: false,
      gap: false,
      group: false,
      hint: undefined,
      icon: '',
      iconBrand: false,
      iconClass: '',
      iconLight: false,
      iconRegular: false,
      iconSize: undefined,
      id: undefined,
      noTag: false,
      outline: false,
      label: '',
      labelClass: '',
      size: '',
      success: '',
      tag: 'div',
      type: 'text',
      validate: false,
      valueDefault: '',
      getValue: () => {},
      onIconMouseEnter: () => {},
      onIconMouseLeave: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test(`does not throw warnings without props`, () => {
    checkProps(wrapper, {});
  });

  test('sets correct value after receiving a `value` property', () => {
    wrapper = setup({ value: 'testValue' });
    expect(wrapper.state('innerValue')).toBe('testValue');
  });

  test('sets correct value during onChange', () => {
    const input = wrapper.find('input');

    input.simulate('change', {
      stopPropagation() {},
      target: { value: 'testValue' }
    });

    expect(wrapper.state('innerValue')).toBe('testValue');
  });

  test(`adds custom class passed as property`, () => {
    wrapper = setup({ className: 'testClassName' });

    checkClass(wrapper, 'testClassName');
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.instance().props['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });

    checkTag(wrapper, 'a');
  });

  test('adds icon', () => {
    wrapper = setup({ icon: 'star' });

    expect(wrapper.find('Fa').length).toBe(1);
  });

  test('adds label', () => {
    wrapper = setup({ label: 'test' });

    expect(wrapper.find('label').length).toBe(1);
  });
});
