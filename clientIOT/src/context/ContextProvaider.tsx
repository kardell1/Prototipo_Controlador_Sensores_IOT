import { useState, useContext, createContext, ReactNode } from "react";
type verifyUser = {
  authenticate : boolean,
  username : string
}
type UserDataProvaider = {
  authUser : verifyUser
  VerifyUser : ({authenticate , username} :verifyUser ) => void
}
type DataProvider = {
  children : ReactNode
}
export const AuthContext = createContext<UserDataProvaider>({
  authUser : {
    authenticate : false,
    username : ''
  },
  VerifyUser({}) {},
});
export const AuthProvider = ({ children }: DataProvider) => {
  const [authUser, setAuthUser] = useState({
    authenticate: false,
    username: "",
  });

  const VerifyUser = ({authenticate,username}:verifyUser) => {
    setAuthUser((prevVerifyRol) => ({
      ...prevVerifyRol,
      authenticate,
      username
    }));
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          authUser,
          VerifyUser ,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
export const useDataContext = () => {
  return useContext(AuthContext);
};
