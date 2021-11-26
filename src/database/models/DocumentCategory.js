const { Model, DataTypes } = require('sequelize');

class DocumentCategory extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Document, { foreignKey: "id"});
  }
}
module.exports = DocumentCategory;