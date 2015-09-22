define([
    'backbone'
], function (Backbone) {
    'use strict';

    var ChartModel = Backbone.Model.extend({
        defaults: {
            thumb: ''
        }
    });
    
    return ChartModel;
});
