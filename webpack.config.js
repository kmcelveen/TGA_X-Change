module.exports = {
    entry: ['./index.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js',
      },
    module: {
      loaders: [
          {
            test: [/\.js$/, /\.es6$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
            },
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx'],
    },
    watch: true,
  };
