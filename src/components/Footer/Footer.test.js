import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Footer from './Footer';

const setup = (props = {}) => shallow(<Footer {...props} />);

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    console.log(wrapper.debug());
    const footer = findByTestAttr(wrapper, 'footer');
    expect(footer.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      color: 'primary',
      tag: 'a',
      className: 'testClassName'
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

  test('adds color class', () => {
    wrapper = setup({ color: 'primary' });
    expect(wrapper.find(`[className*="primary"]`).length).toBe(1);
  });
});
