import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, testAttr) =>
  component.find(`[data-test="${testAttr}"]`);

export const checkProps = (component, expectedProps) => {
  const result = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );

  expect(result).toBeUndefined();
};

export const checkClass = (component, className) =>
  expect(component.find(`.${className}`).length).toBe(1);

export const checkTag = (component, tag) =>
  expect(component.is(tag)).toBe(true);
