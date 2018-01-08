'use strict'

const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: this.appname // Default to current folder name
      }
    ]).then(answers => {
      this.props = answers;
    });
  }

  writing() {
    this._writePackageFiles();
    this._writeSupportFiles();
    this._writeApplicationFiles();
  }

  _writePackageFiles() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name
      }
    );
  }

  _writeSupportFiles() {
    /* eslint-disable prettier/prettier */
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    /* eslint-enable prettier/prettier */
  }

  _writeApplicationFiles() {
    /* eslint-disable prettier/prettier */
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );

    this.fs.copy(
      this.templatePath('src/sub/test.js'),
      this.destinationPath('src/sub/test.js')
    );
    /* eslint-enable prettier/prettier */
  }

  install() {
    const hasYarn = commandExists('yarn');
    const hasBower = commandExists('bower');

    this.installDependencies({
      npm: !hasYarn,
      yarn: hasYarn,
      bower: hasBower
    });
  }

  end() {
    this.log(chalk.bold.yellow('All done. Now go forth and seize the day!'));
  }
};
