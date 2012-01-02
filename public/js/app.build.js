({
    appDir: "../",
    baseUrl: "js",
    dir: "../build",
    paths: {
        "jquery": "vendor/require-jquery",
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "jqueryoffline": "vendor/jquery.offline"
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
