import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const plugins = [
  babel({
    exclude: 'node_modules/**' // only transpile our source code
  }),
  postcss({
    extract: true
  }),
  resolve(), // so Rollup can find `ms`
  commonjs({
    include: ['node_modules/**'],
    exclude: [
      // 'node_modules/**'
      'node_modules/process-es6/**'
    ],
    namedExports: {
      'node_modules/react/index.js': [
        'Component',
        'PureComponent',
        'Fragment',
        'Children',
        'createElement',
        'createContext',
        'forwardRef'
      ],
      'node_modules/react-dom/index.js': ['render', 'findDOMNode'],
      'node_modules/prop-types/index.js': [
        'PropTypes',
        'func',
        'oneOfType',
        'object',
        'string',
        'element',
        'arrayOf',
        'bool',
        'node',
        'oneOf',
        'number',
        'instanceOf',
        'any',
        'shape'
      ],
      'node_modules/@material-ui/core/styles/index.js': [
        'createMuiTheme',
        'MuiThemeProvider',
        'createGenerateClassName',
        'createStyles',
        'jssPreset',
        'withStyles',
        'withTheme'
      ],
      'node_modules/@material-ui/core/Modal/index.js': ['ModalManager'],
      'node_modules/react-toastify/lib/index.js': ['cssTransition']
    }
  }) // so Rollup can convert `ms` to an ES module
];

const external = [
  'classnames',
  '@date-io/moment',
  'material-ui-pickers',
  'moment',
  'outy',
  'perfect-scrollbar',
  'raf',
  'react',
  'react-autosuggest',
  'react-dom',
  'react-numeric-input',
  'react-popper',
  'react-router-dom',
  'react-toastify',
  'react-transition-group',
  'prop-types',
  '@material-ui/core'
];

export default [
  {
    input: 'src/index.js',
    external,
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  }
];
