angular.module('NoteWrangler').controller('ResourcesShowController', function($scope, $routeParams, Resource, Session) {
  // Without NgResource
  // Resource.find($routeParams.id).success(function(data) {
  //   $scope.resource = data;
  // });
  
  // With NgResource
  $scope.resource = Resource.get({id: $routeParams.id})

  Session.sessionData().success(function(sessionUser) {
    $scope.currentUser = sessionUser;
  });
});
