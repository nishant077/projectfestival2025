import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

// 1. Define the type for context
type NavbarContextType = {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
};

// 2. Create context with a proper type (use undefined as default)
export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// 3. Props type for children
type NavContextProps = {
  children: ReactNode;
};

const NavContext = ({ children }: NavContextProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavContext;
