define([
    'backbone',
    'backbone.layoutmanager',
    'views/Application',
    'templates'
], function (Backbone, LayoutManager, ApplicationView) {
    'use strict';

    var app = {
        root: '/'
    };

    LayoutManager.configure({
        manage: true,
        el: false,
        prefix: 'app/scripts/templates/',
        fetchTemplate: function(path) {
            path = path + '.ejs';
            var JST = window.JST || {};

            if (JST[path]) {
                return JST[path];
            }
        }
    });

    app.layout = new ApplicationView();

    return app;
});
