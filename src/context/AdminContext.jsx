import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
