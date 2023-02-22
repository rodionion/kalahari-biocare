const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
	entry: {
		header: './src/scripts/header.js',
		footer: './src/scripts/footer.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true,
	},
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
            	test: /\.html$/,
            	use:
            	{
            		loader: 'html-loader'
            	}
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",   
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
        }),
        new HtmlWebpackPlugin({
            filename: "blog.html",
            template: "./src/blog.html",
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "privacy.html",
            template: "./src/privacy.html",
        }),
        new HtmlWebpackPlugin({
            filename: "product-single-package.html",
            template: "./src/product-single-package.html",
        }),
        new HtmlWebpackPlugin({
            filename: "products-personal.html",
            template: "./src/products-personal.html",
        }),
        new HtmlWebpackPlugin({
            filename: "products-wholesale.html",
            template: "./src/products-wholesale.html",
        }),
        new HtmlWebpackPlugin({
            filename: "products.html",
            template: "./src/products.html",
        }),
        new HtmlWebpackPlugin({
            filename: "terms.html",
            template: "./src/terms.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
		static: './dist',
	},
	optimization: {
		runtimeChunk: 'single',
	},
};