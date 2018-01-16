const fs          = require('fs');
const path        = require('path');

module.exports = {
  normalizeEntityName: function() {
  },

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('foundation-sites', '6.2.3');
  },
  afterInstall: function(options) {
    //copying over the foundation.scss and _settings.scss to make foundation customization easy
    let foundationPath = path.join(process.cwd(), 'bower_components', 'foundation-sites', 'scss');
    let stylePath = path.join(process.cwd(), 'app', 'styles');
    let settingsPath = path.join(foundationPath, 'settings', '_settings.scss');
    let mainPath = path.join(foundationPath, 'foundation.scss');
    let _this = this;

    fs.writeFileSync(path.join(stylePath, '_settings.scss'), fs.readFileSync(settingsPath));
    fs.writeFileSync(path.join(stylePath, '_foundation.scss'), fs.readFileSync(mainPath));

    return this.addPackagesToProject([
      { name: 'ember-cli-sass', target: '7.1.3'},
      { name: 'broccoli-clean-css', target: '2.0.1' }
    ]);
  }
};
