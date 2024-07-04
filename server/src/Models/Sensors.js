import { DataTypes } from "sequelize";
import sequelize from "../Services/SequelizeConfig.js";
export const Sensor = sequelize.define("sensor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  sensor: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});