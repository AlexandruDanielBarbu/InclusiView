const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: {
        popup: './Scripts/popup.js', // Entry point for popup
        background: './Scripts/background.js', // Entry point for background script
        chatBot: './Scripts/chatBot.mjs', // Entry point for chatbot script
        screenReader: './Scripts/screenReader.js', // Entry point for screen reader script
        btnStyle: './Scripts/btnStyle.js', // Entry point for button style script
        script: './Scripts/script.js' // Entry point for other scripts
    },
    output: {
        filename: '[name].bundle.js', // Output file name pattern based on entry point names
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JavaScript files using Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Use index.html as a template for the output HTML file
            filename: 'index.html' // Output HTML file name
        }),
    ],
    devtool: 'source-map', // Enable source maps for easier debugging
};