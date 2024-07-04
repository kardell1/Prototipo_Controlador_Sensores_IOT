import { useState, useContext, createContext, ReactNode } from "react";
type DashboardRouteProvaider = {
  componentRoute : string ,
  ComponentRoute : (componentRoute:string ) => void
}

type RouteProvider = {
  children : ReactNode  
}

export const ContextDashboardNavegation =
  createContext<DashboardRouteProvaider>({
    componentRoute: "",
    ComponentRoute({}) {},
  });
export const Route_Provider = ({ children }: RouteProvider) => {
  const [componentRoute, setComponentRoute] = useState("dashboard");
  const ComponentRoute = (componentRoute: string) => {
    setComponentRoute(componentRoute);
  };
  return (
    <>
      <ContextDashboardNavegation.Provider
        value={{
          componentRoute,
          ComponentRoute,
        }}
      >
        {children}
      </ContextDashboardNavegation.Provider>
    </>
  );
};
export const useDataContext = () => {
  return useContext(ContextDashboardNavegation);
};
