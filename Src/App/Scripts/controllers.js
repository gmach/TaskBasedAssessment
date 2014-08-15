'use strict';

/* Controllers */

var incidentControllers = angular.module('incidentControllers', []);

//var obj = {"resources":[{"id":1,"incidentName":"Bowman River Rd, Bowman","alertLevel":"Advice","location":"1561 Bowman River Rd, Bowman, NSW 2422","councilArea":"Gloucester","status":"under control","type":"Bush Fire","size":"1068 ha","responsibleAgency":"Rural Fire Service","lastUpdated":"2014-08-13T16:00:00","links":[{"href":"http://nswrfstaskassessment.apphb.com/api/incidents/1","rel":"self"}]},{"id":2,"incidentName":"Bulldog Rd, Bulldog","alertLevel":"Advice","location":"1054 Bulldog Rd, Bulldog, NSW 2469","councilArea":"Clarence Valley","status":"under control","type":"Bush Fire","size":"518 ha","responsibleAgency":"Forests NSW","lastUpdated":"2014-08-13T17:30:00","links":[{"href":"http://nswrfstaskassessment.apphb.com/api/incidents/2","rel":"self"}]},{"id":3,"incidentName":"Cooperabung Range Rd, Cooperabung","alertLevel":"Advice","location":"Cooperabung Range Rd, Cooperabung, NSW 2441","councilArea":"Port Macquarie-Hastings","status":"being controlled","type":"Bush Fire","size":"297 ha","responsibleAgency":"Forests Service","lastUpdated":"2014-08-13T16:00:00","links":[{"href":"http://nswrfstaskassessment.apphb.com/api/incidents/3","rel":"self"}]}],"links":[{"href":"http://nswrfstaskassessment.apphb.com/api","rel":"home"}]};

incidentControllers.controller('incidentListCtrl', ['$scope', 'RESTBackend',
    function($scope, RESTBackend) {
        var getAll = RESTBackend.query();

        $scope.incidents = getAll.resources;
        $scope.editincident = function (incident) {
            incident.isDirty = true;
        }
        $scope.saveincident = function (incident) {
            RESTBackend.update({ id:incident.id }, incident);
            incident.isDirty = undefined;
        }
        $scope.deleteincident = function (index) {
            var id = $scope.incidents[index].id;
                RESTBackend.delete({},{'id': id}); // Calls: DELETE /api/customer/Id
            $scope.incidents.splice(index, 1);
        }
    }]);

incidentControllers.controller('incidentAddCtrl', ['$scope','RESTBackend',
    function($scope, RESTBackend) {
        $scope.addincident = function() {
            RESTBackend.save($scope.incident);
            $scope.result = "SUCCESSFULLY ADDED!";
        }
    }]);

incidentControllers.controller('incidentDetailCtrl', ['$scope', '$routeParams', 'RESTBackend',
    function($scope, $routeParams, RESTBackend) {
        $scope.incident = RESTBackend.get({},{'id': $routeParams.id}); // Calls: GET /api/customer/Id
            /*get({Id: $routeParams.Id}, function(phone) {
           // $scope.mainImageUrl = phone.images[0];
        });*/

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);
