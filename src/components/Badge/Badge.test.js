import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Badge from './Badge';

const setup = (props = {}) => shallow(<Badge {...props} />);

describe('<Badge />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    console.log(wrapper.debug());
    const badge = findByTestAttr(wrapper, 'badge');
    expect(badge.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Badge />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      color: 'primary',
      pill: true,
      className: 'testClassName',
      tag: 'div'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom class passed as property`, () => {
    wrapper = setup({ className: 'testClassName' });

    checkClass(wrapper, 'testClassName');
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
      
    test('adds color class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });

    test('adds badge-color class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'badge-primary');
    });

    test('adds badge-pill class', () => {
      wrapper = setup({ pill: true });
      checkClass(wrapper, 'badge-pill');
    });
  });
});
