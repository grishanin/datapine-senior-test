define([
    'models/Collection',
    'models/ChartModel'
], function (Collection, ChartModel) {
    'use strict';

    var ChartsCollection = Collection.extend({
        url: '/scripts/mock/charts.json',
        initialize: function () {
            Collection.prototype.initialize.apply(this, arguments);
        },
        model: ChartModel
    });

    return ChartsCollection;
});
