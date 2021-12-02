const { Model, DataTypes } = require('sequelize');

class PracticeCategory extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      subcategory_of: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'practice_categories', key: 'id' }
      },
     }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.PracticeCategory, { foreignKey: "subcategory_of",  as: 'sub_category_of' });
    this.belongsTo(models.Practice, {foreignKey: "id", as: 'practice_categories_practices'});
  }
}
module.exports = PracticeCategory;
