const { Model, DataTypes } = require('sequelize');

class Practice extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING
    })
  }

  static associate(models) {
    this.belongsTo(models.PracticeGroup, { foreignKey: "id", as: 'practice_practice_group' });
  }
}
module.exports = Practice;
