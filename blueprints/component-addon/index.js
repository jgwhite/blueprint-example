'use strict';

const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: '',

  locals(options) {
    return {
      componentName: `Networks::${stringUtils.camelize(options.entity.name)}`,
    };
  },
};
