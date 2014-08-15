'use strict';

/* Services */
var incidentServices = angular.module('incidentServices', ['ngResource']);

incidentServices.factory('RESTBackend', ['$resource',
    function($resource){
        var res = $resource(
            'http://nswrfstaskassessment.apphb.com/api/incidents/:id',
            {id: "@id"},
            {
                'update': { method:'PUT' }

            }
        );

        return res;
    }]);
