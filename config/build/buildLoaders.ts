import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
	const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

	const cssLoader = buildCssLoader(isDev)

	return [
		fileLoader,
		svgLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		cssLoader,
	]
}