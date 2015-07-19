/*
This is a way of handling ajax requests using NgResource, it performs a similar function
to the Resource Service.
*/

angular.module('NoteWrangler').factory('Resource', function NoteFactory($resource) {  
  return $resource('/resources/:id', {}, {
    update: {
      method: "PUT"
    }
  });
});
