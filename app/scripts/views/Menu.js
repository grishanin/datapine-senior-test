define([
    'backbone',
    'backbone.layoutmanager'
], function(Backbone) {
    'use strict';

    var MenuView = Backbone.Layout.extend({
        template: 'menu'
    });

    return MenuView;
});
