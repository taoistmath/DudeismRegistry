angular.module('NoteWrangler').controller('ResourcesEditController', function($scope, $routeParams, Resource, Category, Session) {
  // Without NgResource
  // Resource.find($routeParams.id).success(function(resourceData) {
  //   $scope.resource = resourceData;
  // });
  
  Session.authenticate();
    
  // With NgResource
  $scope.resource = Resource.get({id: $routeParams.id})

  // Fetch the node types to use within the sorting menu
  Category.all().then(function(categoryData) {
    $scope.categories = categoryData;
  });
  
  $scope.updateResource = function(resource) {
    $scope.errors = null;
    $scope.updating = true;

    // Without NgResource
    // Resource.update(resource).catch(function(resourceData) {
    //   $scope.errors = [resourceData.data.error];
    // }).finally(function() {
    //   $scope.updating = false;
    // });
    
    // With NgResource
    resource.$update().catch(function(resourceData) {
      $scope.errors = [resourceData.data.error];
    }).finally(function() {
      $scope.updating = false;
    });
  };
});
