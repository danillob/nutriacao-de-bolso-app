const { Model, DataTypes } = require('sequelize');

class Document extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      link_download: DataTypes.STRING,
      description: DataTypes.STRING,
      link_site: DataTypes.STRING,
      document_category_id: {
        type: DataTypes.INTEGER,
        references: { model: 'document_categories', key: 'id' }
      },
     }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.DocumentCategory, { foreignKey: "document_category_id", as: "document_document_category"});
  }
}
module.exports = Document;