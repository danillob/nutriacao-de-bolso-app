const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class PracticeGroup extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Practice, { foreignKey: "id", as: 'practiceGroup_practice' });
    this.belongsTo(models.PracticeSubGroup, { foreignKey: "id", as: 'practiceGroup_sub_group' });
  }
}
module.exports = PracticeGroup;
