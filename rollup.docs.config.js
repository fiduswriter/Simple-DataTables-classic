import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

export default [
    {
        input: 'docs/index.js',
        plugins: [
            resolve({browser: true}),
            commonjs(),
            builtins(),
            globals(),
            babel({
			           plugins: [
				               '@babel/plugin-syntax-dynamic-import'
			           ]
		        }),
            terser()
        ],
        // ES module version, for modern browsers
        output: {
            dir: "docs/dist/module",
            format: "es",
            sourcemap: true
        }
    },
    {
        input: 'docs/index.js',
        plugins: [
            resolve({browser: true}),
            commonjs(),
            builtins(),
            globals(),
            babel({
			           plugins: [
				               '@babel/plugin-syntax-dynamic-import'
			           ]
		        }),
            terser()
        ],
        // SystemJS version, for older browsers
        output: {
            dir: "docs/dist/nomodule",
            format: "system",
            sourcemap: true
        }
    }
]
