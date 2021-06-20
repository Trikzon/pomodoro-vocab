const { join } = require("path");

module.exports = {
    context: __dirname,
    entry: {
        "background": join(__dirname, "src/background.ts"),
        "content": join(__dirname, "src/content.ts"),
        "popup": join(__dirname, "src/popup.ts"),
        "sidebar": join(__dirname, "src/sidebar.ts")
    },
    output: {
        path: join(__dirname, "dist/src/"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}
