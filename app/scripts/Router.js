define([
    'backbone',
    'application',
    'views/ChartThumbnails',
    'views/Chart',
    'views/About'
], function (Backbone, app, ChartThumbnailsView, ChartView, AboutView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '' : 'index',
            'charts/:id': 'chartById',
            'about': 'about',
        },
        index: function () {
            app.layout.setViews({
                '#content': new ChartThumbnailsView({ collection: app.layout.collection })
            }).render();
        },
        chartById: function (id) {
            var collection = app.layout.collection;

            var showChart = function () {
                app.layout.setViews({
                    '#content': new ChartView({ model: collection.get(id) })
                }).render();
            };

            if (collection.hasDataForView()){
                showChart();
            } else {
                collection.once('sync', function () {
                    showChart();
                });
            }
        },
        about: function () {
            app.layout.setViews({
                '#content': new AboutView()
            }).render();
        }
    });

    return Router;
});
