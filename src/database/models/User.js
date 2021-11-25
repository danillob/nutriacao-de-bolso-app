const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User extends Model {
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
      cpf: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      role: DataTypes.INTEGER,

    }, {
      hooks: {
        beforeValidate: async (user, options) => {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      scopes: {
        withoutPassword: {
          attributes: { exclude: ['password'] }
        }
      },
      sequelize
    })
  }

  static generateJwt(user) {
    return jwt.sign({ email: user.email }, process.env.API_SALT);
  }

  static associate(models) {
    this.hasMany(models.ExternalLink, { foreignKey: "user_id", as: 'user_external_links' });
    this.hasMany(models.Information, { foreignKey: "user_id", as: 'user_informations' });
  }
}
module.exports = User;