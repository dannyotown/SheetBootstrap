import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
} from '../../../tests/utils';
import PerfectScrollbar from './PerfectScrollbar';

const setup = (props = {}) =>
  shallow(
    <PerfectScrollbar {...props}>
      <div></div>
    </PerfectScrollbar>
  );

const mounted = (props = {}) =>
  mount(
    <PerfectScrollbar {...props}>
      <div></div>
    </PerfectScrollbar>
  );

describe('<PerfectScrollbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mounted();
  });

  test(`renders`, () => {
    const PerfectScrollbar = findByTestAttr(wrapper, 'perfect-scrollbar');
    expect(PerfectScrollbar.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <PerfectScrollbar>
        <div></div>
      </PerfectScrollbar>,
      div
    );
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      option: {},
      containerRef: () => {},
      onScrollY: () => {},
      onScrollX: () => {},
      onScrollUp: () => {},
      onScrollDown: () => {},
      onScrollLeft: () => {},
      onScrollRight: () => {},
      onYReachStart: () => {},
      onYReachEnd: () => {},
      onXReachStart: () => {},
      onXReachEnd: () => {}
    };

    wrapper = mounted(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  describe('sets classes', () => {
    test('sets "scrollbar-container" class name by default', () => {
      checkClass(wrapper, 'scrollbar-container');
    });

    test('adds "test" - custom class', () => {
      wrapper = mounted({ className: 'test' });
      checkClass(wrapper.childAt(0), 'test');
    });
  });
});
