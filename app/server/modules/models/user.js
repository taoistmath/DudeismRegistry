/*
This is a combination model/migration/database table definition. See:
http://sequelizejs.com/docs/1.7.8/models#definition
for more information.

This particular model is for users
*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    ordcert: DataTypes.STRING,
    ordyear: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    geo: DataTypes.STRING,
    donation: DataTypes.INTEGER,
    twitter_handle: DataTypes.STRING,
    site: DataTypes.STRING
  });
}
