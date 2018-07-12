var Sequelize = require('sequelize');
var config =  require("../config.json");
var db        = {};
var fs        = require('fs');
var path      = require('path');
var userProfile = require("../user.json")


var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(function(file){
    return (file !== 'index.js');
}).forEach(function(file){
     var model = (sequelize['import'](path.join(__dirname, file)));
     db[model.name] = model;
});

sequelize.sync({
    force: true
    }).then(function() {
       db['user'].bulkCreate(userProfile).then(function(resp){
         if(resp){
            console.log("user created");
         }
       });
      console.log('It worked!');
    }, function(err) {
      console.log('An error occurred while creating the table:', err);
    });

 db.sequelize = sequelize;  
 db.Sequelize = Sequelize;

 module.exports = db;