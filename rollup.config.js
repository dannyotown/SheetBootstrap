import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import url from "rollup-plugin-url"
import autoExternal from 'rollup-plugin-auto-external';

const plugins = [
  autoExternal(),
  babel({
    exclude: 'node_modules/**'
  }),
  postcss({
    extract: false   // do not generate additional css file
  }),
  resolve(), // so Rollup can find `ms`
  commonjs({
    include: ['node_modules/**'],
    exclude: [
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
  }),
  url({
    include: [/\.ttf(\?v=\d+\.\d+\.\d+)?$/, /\.svg(\?v=\d+\.\d+\.\d+)?$/, /\.png(\?v=\d+\.\d+\.\d+)?$/, /\.gif(\?v=\d+\.\d+\.\d+)?$/],
    emitFiles: true
  })
];


export default [
  {
    input: 'src/index.js',
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
