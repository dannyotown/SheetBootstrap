import moment from 'moment';
import variables from '../../../../../scss/core/_colors.scss';
const { danger, warning, success, primary, info, secondary, light, dark } = variables;

export const makeFirstLetterUpper = element => {
  return element.charAt(0).toUpperCase() + element.slice(1);
};

export const makeRandomID = (id = '1') => {
  return Array(id.length)
    .fill(null)
    .map(() =>
      Math.random()
        .toString(16)
        .substr(2)
    )
    .join('');
};

const themeColors = {
  danger,
  warning,
  success,
  primary,
  info,
  secondary,
  light,
  dark
};

const themeColorsOpacity = {
  danger: 'rgba(255, 53, 71, .2)',
  warning: 'rgba(255, 187, 51, .2)',
  success: 'rgba(0, 200, 81, .2)',
  primary: 'rgba(66, 133, 244, .2)',
  info: 'rgba(51, 181, 229, .2)',
  secondary: 'rgba(170, 102, 204, .2)',
  light: 'rgba(224, 224, 224, 1) ',
  dark: 'rgba(33, 33, 33, .2)'
};

export const takeThemeColor = theme => themeColors[theme];
export const takeThemeColorOpacity = theme => themeColorsOpacity[theme];

export const takeAcutalDate = date => moment(date || new Date());
