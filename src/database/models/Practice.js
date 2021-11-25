const { Model, DataTypes } = require('sequelize');

class Practice extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      practice_category_id: {
        type: DataTypes.INTEGER,
        references: { model: 'practice_categories', key: 'id' }
      },
    },{
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.PracticeCategory, { foreignKey: "id", as: 'practice_practice_category' });
  }
}
module.exports = Practice;
