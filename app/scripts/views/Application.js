define([
    'backbone',
    'views/Menu',
    'models/ChartsCollection',
    'backbone.layoutmanager'
], function (Backbone, MenuView, ChartsCollection) {
    'use strict';

    var ApplicationView = Backbone.Layout.extend({
        el: '#app',
        template: 'application',
        initialize: function () {
            this.collection = new ChartsCollection();
            this.collection.fetch();
        },
        views: {
            '#header': new MenuView()
        }
    });

    return ApplicationView;
});
