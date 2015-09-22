define([
    'backbone',
    'backbone.layoutmanager'
], function(Backbone) {
    'use strict';

    var ChartThumbnailView = Backbone.Layout.extend({
        template: 'chart-thumbnail',
        initialize: function () {
            this.listenTo(this.model, 'change:thumb', this.render);
        }
    });

    var ChartThumbnailsView = Backbone.Layout.extend({
        template: 'charts-thumbnails',
        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },
        beforeRender: function () {
            this.renderChildren();
        },
        renderChildren: function () {
            this.collection.each(function(chart) {
                this.insertView(
                    '.charts-thumbnails',
                    new ChartThumbnailView({ model: chart})
                );
                if (!chart.get('thumb')) {
                    this.requestThumbnail(chart);
                }
            }, this);
        },
        // http://www.highcharts.com/docs/export-module/export-module-overview
        requestThumbnail: function(chart) {
            var requestData = {
                width : 350,
                type : 'image/png',
                async : true
            };
            var options = {
                chartSettings: chart.get('chartSettings'),
                series: chart.get('series')
            };

            requestData.options = JSON.stringify(options);

            $.ajax({
                type: 'POST',
                url: 'http://export.highcharts.com/',
                data: requestData,
                context: chart,
                async: true
            }).done(function (path) {
                if (path) {
                    this.set('thumb', 'http://export.highcharts.com/' + path);
                }
            });
        },
        serialize: function () {
            return {
                charts: this.collection.toJSON()
            };
        }
    });


    return ChartThumbnailsView;
});
