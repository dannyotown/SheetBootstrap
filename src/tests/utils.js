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
  component.find(`.${className}`);
