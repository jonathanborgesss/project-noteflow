import { useContext, createContext, useState } from "react";

const MobileMenuContext = createContext();

function MobileMenuContextProvider({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuOpened, setMobileMenuOpened }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMobileMenuContext() {
  return useContext(MobileMenuContext);
}

export { useMobileMenuContext, MobileMenuContextProvider };