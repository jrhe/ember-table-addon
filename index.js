'use strict';

module.exports = {
  name: 'ember-table',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/antiscroll/antiscroll.js');
    app.import(app.bowerDirectory + '/antiscroll/antiscroll.css');
    app.import(app.bowerDirectory + '/jquery-ui/ui/jquery-ui.custom.js');
    app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
    app.import(app.bowerDirectory + '/ember-table/dist/ember-table.js');
    app.import(app.bowerDirectory + '/ember-table/dist/ember-table.css');
  },

  afterInstall: function() {
    this.addBowerPackageToProject('antiscroll');
    this.addBowerPackageToProject('bootstrap');
    this.addBowerPackageToProject('ember');
    this.addBowerPackageToProject('handlebars');
    this.addBowerPackageToProject('jquery');
    this.addBowerPackageToProject('jquery-mousewheel');
    this.addBowerPackageToProject('jquery-ui');
  }
};
