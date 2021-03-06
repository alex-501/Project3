const bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,},
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,}, },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false,  },  
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "#007bff",} });
  User.associate = function (models) {
    User.belongsTo(models.Household, {
      foreignKey: {
        allowNull: false
      }
    });
    User.hasMany(models.Chore);
    User.hasMany(models.Repetition, {
      onDelete: "cascade"});};
  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }; User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null); });
  return User;
};