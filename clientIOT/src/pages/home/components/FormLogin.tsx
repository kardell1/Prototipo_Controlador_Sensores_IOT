import { useContext, useState } from "react";
import { MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvaider";
import { AuthenticateUser } from "../../../api/AuthenticateUser";
export const FormLogin = () => {
  const navegate = useNavigate();
  const { VerifyUser } = useContext(AuthContext);
  const [error, setError] = useState({
    error: "",
    viewError: false,
  });
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resolve = await AuthenticateUser({
      username: info.username,
      password: info.password,
    });
    if (resolve.status === "success") {
      VerifyUser({
        authenticate: true,
        username: resolve.user.username,
      });
      navegate("/dashboard");
    } else {
      setError({
        error: resolve.message,
        viewError: true,
      });
    }
  };

  return (
    <form onSubmit={handleForm}>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-2">
          <p
            className={` ${
              error.viewError ? "top-0" : "-top-full"
            } absolute right-[20%] text-slate-100 font-bold bg-red-500 p-2 rounded-2xl transition-{position} duration-500 ease-in-out shadow-md `}
          >
            {error.error}
          </p>
          <div className="bg-zinc-200 p-3 rounded-3xl w-full flex items-center gap-3  ">
            <div className="text-2xl">
              <MdPerson />
            </div>
            <input
              autoComplete="off"
              type="text"
              placeholder="Username"
              className="bg-zinc-200 focus:outline-none w-full overflow-hidden "
              name="username"
              onChange={handleInput}
              value={info.username}
            />
          </div>
          <div className="bg-zinc-200 p-3 rounded-3xl w-full flex items-center gap-3 ">
            <div className="text-2xl">
              <MdLock />
            </div>
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              className="bg-zinc-200 focus:outline-none w-full overflow-hidden"
              name="password"
              onChange={handleInput}
              value={info.password}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 font-bold p-3 rounded-3xl w-full text-slate-100 hover:bg-green-600 transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
};
