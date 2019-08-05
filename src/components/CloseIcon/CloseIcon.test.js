import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import CloseIcon from './CloseIcon';

const mockCallback = jest.fn();
const defaultProps = {
  className: 'mockClassName',
  type: 'submit',
  style: { background: 'red' },
  onClick: mockCallback
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CloseIcon {...setupProps} />);
};

describe('<CloseIcon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`does not throw warnings with expected props`, () => {
    checkProps(CloseIcon, defaultProps);
    checkProps(CloseIcon, {});
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CloseIcon />, div);
  });

  test(`renders close button`, () => {
    const closeBtn = findByTestAttr(wrapper, 'close-button');
    expect(closeBtn.length).toBe(1);
  });

  test(`invokes callback function passed as a prop after clicking a button`, () => {
    const closeBtn = findByTestAttr(wrapper, 'close-button');
    closeBtn.simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test(`adds custom attributes passed as props`, () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });
    const closeBtn = findByTestAttr(wrapper, 'close-button');

    expect(closeBtn.props()['data-custom-attr']).toBe('custom');
  });

  test(`adds custom class passed as props`, () => {
    const className = `testClassName`;
    wrapper = setup({ className });

    expect(checkClass(wrapper, className).length).toBe(1);
  });

  test(`allows to set custom aria-label attribute`, () => {
    wrapper = setup({ ariaLabel: 'custom' });
    const closeBtn = wrapper.find(`[aria-label="custom"]`);

    expect(closeBtn.length).toBe(1);
  });
});
