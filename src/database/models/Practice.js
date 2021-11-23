const { Model, DataTypes } = require('sequelize');

class Practice extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING
    })
  }

  static associate(models) {
    this.belongsTo(models.PracticeGroup, { foreignKey: "id", as: 'practice_practice_category' });
  }
}
module.exports = Practice;
