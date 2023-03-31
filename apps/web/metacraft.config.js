const { web3Polyfills } = require('@metacraft/cli-web3-polyfills');
const { tamaguiBuild } = require('../../tool/webpack/middleware/tamagui');
const { copyAssets } = require('../../tool/webpack/middleware/asset');
const { splitChunks } = require('../../tool/webpack/middleware/chunk');
const { setEnvironments } = require('../../tool/webpack/middleware/env');
const { generateSwcOptions } = require('../../tool/webpack/swc');

module.exports = {
	useReact: true,
	port: () => 3003,
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'app',
	webpackMiddlewares: [
		tamaguiBuild,
		copyAssets,
		splitChunks,
		web3Polyfills,
		setEnvironments({
			'process.env.TAMAGUI_TARGET': '"web"',
		}),
	],
	swcOptions: () => generateSwcOptions(),
	moduleAlias: {
		global: {
			'react-native$': 'react-native-web-lite',
			'react-native-web$': 'react-native-web-lite',
			'react-native-svg': require.resolve('@tamagui/react-native-svg'),
		},
	},
};