# Transi #

Transi is a translation web-application. Its focus is on the user interface (UI) and a easy way storing and retreving the translation data.

## SMTP Mail transport ##

To test the SMTP Mail transport in Development Mode use mailcatcher:
http://mailcatcher.me/
Its documentation says:

1.  ''gem install mailcatcher''
2.  ''mailcatcher''
3.  Goto: http://localhost:1080


For Production Environment define your own smtp server


## Javascript structure ##
trailsy is using backbone.js, jquery, underscore.js and require.js AMD

## Javascript build ##
1. Install node.js ("#brew install node" on osx with homebrew)
2. install npm ("#curl http://npmjs.org/install.sh | sh")
3. install requirejs ("#npm install requirejs@1.0.2") //this version is working
4. delete existing build if any ("#rm -rf public/build")
5. cd into public/js and run ("#node ../../node_modules/.bin/r.js -o app.build.js")

