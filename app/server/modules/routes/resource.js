var models = require('../models');
var Resource = models.Resource;
var User = models.User;
var Category = models.Category;
var resourceSafeParams = ["id", "link", "description", "title", "userId", 'CategoryId'];
var userSafeParams = ['id', 'name', 'username', 'avatar', 'ordcert', 'ordyear', 'bio', 'geo', 'donation', 'twitter_handle', 'site'];

module.exports = function(app) {
  app.get('/resources', function(req, res) {
    models.sequelize.sync().on('success', function() {
      Resource.findAll({attributes: resourceSafeParams, include: [Category, {model: User, attributes: userSafeParams}]}).success(function(resources) {
        res.json(resources);
      })
    });
  });
  
  app.post('/resources', function(req, res) {
    models.sequelize.sync().on('success', function() {
      Resource.create({UserId: req.user.id, CategoryId: req.param('CategoryId'), link: req.param('link'), title: req.param('title'), description: req.param('description')}).success(function(resources) {
        res.json(resources);
      })
    });
  });
  
  app.put('/resources', function(req, res) {
    var param;
    var updateParams = {};
    var resourceId = parseInt(req.param('id'));

    models.sequelize.sync().on('success', function() {
      Resource.find({where: {id: resourceId}, attributes: resourceSafeParams, include: [Category]}).success(function(resource) {

        // Return an 401 aunauthorized if a user tries to editor another user's resource
        if(!req.user || req.user.id !== resource.values.UserId) {
          res.status(401);
          res.json({error: "You are not authorized to edit this resource"});
          return;
        }
        
        // Loop through the resourceSafeParams and update their values from the given ones.
        for(var i=0, l = resourceSafeParams.length; i < l; i++ ) {
          param = resourceSafeParams[i];
          updateParams[param] = req.param(param);
        }

        resource.updateAttributes(updateParams).success(function() {
          res.json(resource);
        });
      });
    });
  });

  app.get('/resources/:id', function(req, res) {
    var resourceId = parseInt(req.params.id, 10);
    
    // If a resource is not found at the given id, return an empty object
    if(!resourceId) {
      res.json({});
      return;
    }

    models.sequelize.sync().on('success', function() {
      Resource.find({where: {id: resourceId}, attributes: resourceSafeParams, include: [Category, {model: User, attributes: userSafeParams}]}).success(function(resource) {
        res.json(resource);
      });
    });
  });
};
