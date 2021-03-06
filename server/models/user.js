'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        isEmail: true,
        isUnique(email,next) {
          const model=require('../models');

          model.User.findAll({where: {email: email}})
          .done((user) => {
            if (user!='')   return next('the email is already exist');
            next();
          });
        }
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },
    
    aboutMe: DataTypes.TEXT,
    profilePicture:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'userId', as: 'posts'})
    User.hasMany(models.Comment,{foreignKey:'userId',as:'comment'})

    User.belongsToMany(models.User,{through: 'Follow',foreignKey:'friendId',as:'followers'})
    User.belongsToMany(models.User,{through: 'Follow',foreignKey:'userId',as:'following'})
  };
  return User;
};