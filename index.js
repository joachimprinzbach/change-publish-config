'use strict';
const fs = require('fs');
const pkgUp = require('pkg-up');
const chalk = require('chalk');

const changePublishConfig = (registryUrl, path) => {
    pkgUp(path).then(pathToPackage => {
        if(registryUrl) {
        const actualPackageJson = require(pathToPackage);
            actualPackageJson.publishConfig = actualPackageJson.publishConfig || {};
            actualPackageJson.publishConfig.registry = registryUrl;
            fs.writeFile('package.json', JSON.stringify(actualPackageJson, null, 2)), err => {
                if(err) {
                    console.log(err);
                }
            }
        } else {
            console.log(chalk.red("registry config param is required."));
        }
    })
};

module.exports = changePublishConfig;