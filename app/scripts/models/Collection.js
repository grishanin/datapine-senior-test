define([
    'backbone',
], function (Backbone) {
    'use strict';

    var Collection = Backbone.Collection.extend({
        lastFetchedTime: null,
        initialize: function () {
            this.on('sync', function () {
                this.lastFetchedTime = Date.now();
            });
        },
        hasDataForView: function () {
            return this.lastFetchedTime !== null;
        }
    });

    return Collection;
});
