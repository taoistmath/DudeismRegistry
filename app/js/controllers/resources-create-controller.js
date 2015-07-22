angular.module('NoteWrangler').controller('ResourcesCreateController', function($scope, Resource, Category, Session) {
  
  // redirect if a user is not logged in
  Session.authenticate();

  // Create a new blank resource
  $scope.resource = new Resource();

  // Fetch the node types to use within the sorting menu
  Category.all().then(function(categoryData) {
    $scope.categories = categoryData;
    $scope.resource.CategoryId = categoryData[0].id;
  });

  $scope.updateResource = function(resource) {
    $scope.errors = null;
    $scope.updating = true;
    
    // Without NgResource
    // Resource.create(resource).catch(function(resourceData) {
    //   $scope.errors = [resourceData.data.error];
    // }).finally(function() {
    //   $scope.updating = false;
    // });
    
    // With NgResource
    resource.$save().catch(function(resourceData) {
      $scope.errors = [resourceData.data.error];
    }).finally(function() {
      $scope.updating = false;
    });
  };
});
