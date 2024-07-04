import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATA_BASE,
  process.env.PASSWORD,
  process.env.USERNAME,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);
export default sequelize;
