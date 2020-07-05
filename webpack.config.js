const path = require("path");

const postCSSPlugins = [
	require("postcss-import"),
	require("postcss-simple-vars"),
	require("postcss-nested"),
	require("autoprefixer"),
];

module.exports = {
	entry: "./assets/scripts/App.js",
	output: {
		filename: "bundles.js",
		path: path.resolve(__dirname),
	},
	mode: "development",
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: { plugins: postCSSPlugins },
					},
				],
			},
		],
	},
};
