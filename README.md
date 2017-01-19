# Starter

### Dependencies

##### [Node.js](https://nodejs.org/)

Download and install [node.js](https://nodejs.org/) which will include [Node Package Manager](https://www.npmjs.com/).

##### [Gulp](http://gulpjs.com)

    npm install --global gulp

##### [SCSS linting](https://github.com/brigade/scss-lint)

    `gem install scss-lint` to install the gem

----

### Setup

`cd` to the project root with Terminal and run `sudo npm install --save-dev` or `./setup` which will install all node packages for the project. Enter your system password if prompted.

----

### Gulp

Gulp must be running to complete certain operations like sass compilation and building production files.

    gulp watch

See `gulpfile.js` for a list of all the tasks available.

##### Important Node Packages

*   [BrowserSync](http://www.browsersync.io/docs/gulp/) - Time-saving synchronised browser testing.
*   [SassDoc for gulp](http://sassdoc.com/gulp/) - Node generated sass & scss documentation.
*   [SCSS Linting](https://www.npmjs.com/package/gulp-scss-lint)
*   [JS Linting](https://www.npmjs.com/package/gulp-jshint)

----

### Editor Config

Editor config attempts to standardize the way our code editors format code. In order to read the .editorconfig file, you
will need to install a plugin or extension for you editor of choice.

*   [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme)
*   [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
*   [Brackets](https://github.com/kidwm/brackets-editorconfig/#readme)
*   [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
*   [IntelliJ IDEA](https://github.com/JetBrains/intellij-community/tree/master/plugins/editorconfig)
*   [Textmate](https://github.com/Mr0grog/editorconfig-textmate)
