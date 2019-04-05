import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
const dependencies = Object.keys(require("./package.json").dependencies)

const plugins = [
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement', 'createContext', 'forwardRef', 'useState', 'useEffect'],
      'node_modules/react-dom/index.js': ['render', 'findDOMNode']
    }
  }),
  babel({
    exclude: 'node_modules/**'
  }),
  postcss({
    extract: false
  }),

];

export default [
  {
    external: dependencies,
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      }
    ]
  }
];