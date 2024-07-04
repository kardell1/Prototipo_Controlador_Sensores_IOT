import  {User}  from "../Models/User.js";
export const createUser = async (req, res) => {
  const { name, lastname, cellphone,email } = req.body;

  try {
    const user_search = await User.create({
      name: name,
      lastname: lastname,
      cellphone: cellphone,
      email : email
    });
    return res.status(201).json({ status: "success", data: user_search });
  } catch (error) {
    return res.status(400).json({ error : error});
  }
};
