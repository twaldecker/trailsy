({
    appDir: "../",
    baseUrl: "js",
    dir: "../build",
    paths: {
        "jquery": "vendor/require-jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        'json2': 'vendor/json2',
        'jsoncache': 'vendor/jsoncache'
    },

    optimize: "uglify",
    optimizeCss: "standard.keepLines",

    modules: [
        {
            name: "main",
            exclude: ["jquery"]
        }
    ]
})
