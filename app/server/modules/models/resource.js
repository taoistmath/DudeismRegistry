/*
This is a combination model/migration/database table definition. See:
http://sequelizejs.com/docs/1.7.8/models#definition
for more information.

This particular model is for resources
*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Resource", {
    link: DataTypes.STRING,
    description: DataTypes.TEXT,
    title: DataTypes.STRING
  });
}
