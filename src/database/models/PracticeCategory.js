const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class PracticeCategory extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.PracticeCategory, { foreignKey: "id", as: 'subcategory_of' });
    this.belongsTo(models.Practice, {foreignKey: "id", as: 'practice_category_practices'};
  }
}
module.exports = PracticeCategory;
