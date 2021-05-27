
module.exports = function(sequelize, DataTypes) {
  var Repetition = sequelize.define("Repetition", 
  {  due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Repetition.associate = function (models) {
    Repetition.belongsTo(models.Chore, {
        foreignKey: {
            allowNull: false
        }
    });Repetition.belongsTo(models.User, {
      foreignKey: {
          allowNull: false
      }
  });
};
  return Repetition;
};
