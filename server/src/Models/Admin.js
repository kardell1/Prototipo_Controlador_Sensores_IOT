import { DataTypes } from "sequelize";
import sequelize from "../Services/SequelizeConfig.js";
export const Admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    // allowNull: false,
  },
  username: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: {
      msg: "ya existe un usuario con ese nombre",
    },
    validate: {
      notNull: {
        msg: "Usuario es requerido",
      },
      notEmpty: {
        msg: "Es necesario un usuario",
      },
      len: {
        args: [5],
        msg: "Debe ser mayor a 5 digitos",
      },
    },
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notNull: {
        msg: "Contraseña es requerida",
      },
      notEmpty: {
        msg: "Es necesario una contraseña",
      },
      len: {
        args: [6],
        msg: "Debe ser mayor a 6 caracteres",
      },
    },
  },
});