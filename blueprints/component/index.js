'use strict';

module.exports = {
  description: '',

  locals(options) {
    return {
      importPath: `my-addon/components/networks/${options.entity.name}`,
    };
  },

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
