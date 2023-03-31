const { resolve } = require('path');

const loaderUri = resolve(
	process.cwd(),
	'node_modules',
	'tamagui-loader/dist/cjs/index.js',
);

const tamaguiBuild = (config) => {
	const original = config.module.rules[0];
	const tamaguiOptions = {
		config: './tamagui.config.ts',
		components: ['tamagui'],
		importsWhitelist: ['constants.js', 'colors.js'],
		logTimings: true,
		disableExtraction: process.env.NODE_ENV !== 'production',
	};

	config.module.rules[0] = {
		test: /\.[jt]sx?$/,
		use: [
			{
				loader: original.loader,
				options: original.options,
			},
			{
				loader: loaderUri,
				options: tamaguiOptions,
			},
		],
	};

	return config;
};

module.exports = {
	tamaguiBuild,
};