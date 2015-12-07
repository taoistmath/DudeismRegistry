angular.module('NoteWrangler').controller('ResourcesIndexController', function($scope, Resource, Session) {
  // Without NgResource
  // Resource.all().success(function(data) {
  //   $scope.info = data;
  // });
  
  // With NgResource
  $scope.resources = Resource.query();

  Session.sessionData().success(function(sessionUser) {
    // Create a new User from the session user data
    $scope.loggedIn = !!sessionUser;
  });
});
