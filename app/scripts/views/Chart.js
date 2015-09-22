define([
    'backbone',
    'backbone.layoutmanager',
    'highcharts'
],
function(Backbone) {
    'use strict';

    var ChartView = Backbone.Layout.extend({
        chart: null,
        template: 'chart',
        events: {
            'change .chart__type'  : 'changeType'
        },
        renderChart: function() {
            var chartOptions = _.extend({},
                this.model.get('settings'),{
                    series: this.model.get('series')
                });

                this.chart = this.$el.find('.chart__container').highcharts(chartOptions).highcharts(); // chart instance
            },
            afterRender: function() {
                this.renderChart();
            },
            changeType: function (e) {
                var newType = $(e.target).val();
                for (var i = 0, len = this.chart.series.length; i < len; i++) {
                    this.chart.series[i].update({
                        type: newType
                    });
                }
            }
        });

        return ChartView;
    });
