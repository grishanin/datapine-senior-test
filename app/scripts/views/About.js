define([
    'backbone',
    'backbone.layoutmanager'
], function(Backbone) {
    'use strict';

    var AboutView = Backbone.Layout.extend({
        template: 'about'
    });

    return AboutView;
});
