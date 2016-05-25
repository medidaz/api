'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/config/config.json')[env];

let db = null;

if (!db) {

  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  db = {
    sequelize,
    Sequelize,
    models: {}
  };

  const modelDir =  path.join(__dirname, "models");
  fs
    .readdirSync(modelDir)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
      var model = sequelize.import(path.join(modelDir, file));
      db.models[model.name] = model;
    });

  Object.keys(db.models).forEach(modelName => {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  });
}
module.exports = db;