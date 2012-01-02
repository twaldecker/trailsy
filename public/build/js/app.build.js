({
    appDir: "../",
    baseUrl: "js",
    dir: "../build",
    paths: {
        "jquery": "vendor/require-jquery"
    },

    optimize: "uglify",
    optimizeCss: "standard",

    modules: [
        {
            name: "main",
            exclude: "jquery"
        }
    ]
})
