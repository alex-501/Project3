
module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define("Chore", {
  chore: {
      type: DataTypes.STRING,
      allowNull: false,},
    repeats: {
      type: DataTypes.BOOLEAN,
      allowNull: false },
    repeated_days: {
      type: DataTypes.STRING,
      allowNull: true },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,  } });
  Chore.associate = function (models) {
    Chore.belongsTo(models.Household, {
        foreignKey: {
            allowNull: false
        } });Chore.hasMany(models.Repetition, {
      onDelete: "cascade" });};
  return Chore;
};
