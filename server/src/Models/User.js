import { DataTypes } from "sequelize";
import { Admin } from "./Admin.js";
import sequelize from "../Services/SequelizeConfig.js";
export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    // allowNull: false,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      notNull: { msg: "No puede ser nulo" },
      notEmpty: { msg: "No puede estar Vacio" },
      customValidation(value) {
        if (!/^[a-zA-Z]+$/.test(value)) {
          throw new Error("Ingrese solo letras");
        }
        if (value.length < 3) {
          throw new Error("Debe ser mayor a 3 caracteres");
        }
      },
    },
  },
});
//relacion con la tabla de admins
User.hasOne(Admin, {
  foreignKey: "id_user", //campo que se crea dentro de el model admin
  sourceKey: "id", //hacia que campo de esta tabla lo va enlazar
});
Admin.belongsTo(User, {
  foreignKey: "id_user", //campo que se crea dentro de el model admin
  targetKey: "id", //que campo de la tabla a la que estamos llamando "Users" hace la referencia  
});

