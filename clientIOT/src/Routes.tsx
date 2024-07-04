import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/home/Login';
import { ProtectedRoutes } from './context/ProtectedRoutes';
import { useDataContext } from './context/ContextProvaider';
import { Dashboard } from './pages/dashboard/Dashboard';

export const Rutas = () => {
  const {authUser} = useDataContext();
  // console.log("el valor del authUser es  : " + authUser);
  // console.log("el valor del authUser es  : " + JSON.stringify(authUser) );
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} /> 
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes
              redirectTo="/"
              authenticate={authUser.authenticate}
            >
              <Dashboard/>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
