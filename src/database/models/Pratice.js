const { Model, DataTypes } = require('sequelize');

class Pratice extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 6
        }
      },
      role: DataTypes.INTEGER,
    })
  }

  static associate(models) {
    this.hasMany(models.ExternalLink, { foreignKey: "user_id", as: 'user_external_links' });
    this.hasMany(models.Information, { foreignKey: "user_id", as: 'user_informations' });
  }
}
module.exports = Pratice;