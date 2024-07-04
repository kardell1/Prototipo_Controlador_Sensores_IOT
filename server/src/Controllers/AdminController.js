import { Admin } from "./../Models/Admin.js";
import { CustomError } from "../Validations/ValidationCustom.js";
import { User } from "../Models/User.js";

export const authAdmin = async (req, res, next) => {
  const { username, password } = req.body;
  const user_name = await Admin.findOne({
    where: {
      username,
    },
  });
  const user_password = await Admin.findOne({
    where: {
      password,
    }
  });
  if (user_name === null) {
    const err = CustomError("ValidationUserError", "Usuario incorrecto");
    next(err);
  } else {
    if (user_password === null) {
      const err = CustomError(
        "ValidationPasswordError",
        "Contraseña incorrecta"
      );
      next(err);
    } else {
      return res.status(202).json({ status: "success", user: user_name });
    }
  }
};

export const create_admin = async (req, res, next) => {
  const { username, password, name} = req.body;
  try {
    const user_search = await Admin.create(
      {
        username,
        password,
        user: {
          name,
         
        },
      },
      {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      }
    );
    return res.status(201).json({ status: "success", data: user_search });
  } catch (err) {
    // return res.status(400).json({ message: error.errors[0].message });
    next(err);
  }
};

// console.log("---------------------------------------------------")
// console.log( "el error es  : " + error)
// console.log( "el tipo de error es  : " + typeof(error) )
// console.log( "los datos del error son : " + JSON.stringify(error))
// console.log( "mostrando solo el mensaje de error : " + error.errors[0].message )
// console.log("---------------------------------------------------")
