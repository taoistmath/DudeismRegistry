/*
This is an example of how to handle ajax data calls without using NgResource
This is for reference only, we favor using Resources over this in the app.
*/

angular.module('NoteWrangler')
.factory('Resources', ['$http', function ResourceFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: "/resources"});
    },
    find: function(id){
      return $http({method:'GET', url: '/resources/' + id});
    },
    update: function(resourceObj) {
      return $http({method: 'PUT', url: '/resources', data: resourceObj});
    },
    create: function(resourceObj) {
      return $http({method: 'POST', url: '/resources', data: resourceObj});
    }
  };
}]);
