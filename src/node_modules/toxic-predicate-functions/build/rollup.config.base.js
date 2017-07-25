const {version, name, author, license} = require('../package.json');
const banner = `
/**
 * ${name} v${version}
 * (c) 2017 ${author}
 * Released under ${license}
 */
`;
import flow from 'rollup-plugin-flow-no-whitespace';
import includePaths from 'rollup-plugin-includepaths';
import babel from 'rollup-plugin-babel';
const babelConfig = {
  common: {
    presets: [
      'flow',
      ['latest', {es2015: {modules: false}}]
    ],
    plugins: ['transform-runtime'],
    runtimeHelpers: true,
    babelrc: false
  },
  es: {
    presets: [
      'flow',
      ['latest', {es2015: {modules: false}}]
    ],
    plugins: ['transform-runtime'],
    runtimeHelpers: true,
    babelrc: false
  },
  umd: {
    presets: ['flow', 'es2015-rollup'],
    plugins: ['transform-runtime'],
    runtimeHelpers: true,
    babelrc: false
  },
  iife: {
    presets: ['flow', 'es2015-rollup'],
    plugins: [],
    babelrc: false
  },
  min: {
    presets: ['flow', 'es2015-rollup'],
    plugins: [],
    babelrc: false
  }
};
export default function (mode) {
  return {
    entry: 'src/index.js',
    banner,
    plugins: [
      babel(babelConfig[mode]),
      flow(),
      includePaths({
        include: {},
        paths: ['src'],
        external: [],
        extensions: ['.js']
      })
    ]
  };
};
