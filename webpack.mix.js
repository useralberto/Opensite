let mix = require('laravel-mix');
mix.js('src/js/app.js', 'web/js').sass('src/scss/app.scss', 'web/css');
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    };
});