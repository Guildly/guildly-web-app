import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export interface UIState {
  /** The state of the UI layout. */
  isLeftMenuOpen?: boolean;
  handleLeftDrawerToggler: () => void;
  isRightMenuOpen?: boolean;
  handleRightDrawerToggler: () => void;
}

const UI_INITIAL_STATE: UIState = {
  isLeftMenuOpen: true,
  handleLeftDrawerToggler: () => undefined,
  isRightMenuOpen: true,
  handleRightDrawerToggler: () => undefined,
};

const UIContext = createContext<UIState>(UI_INITIAL_STATE);

export function useUI(): UIState {
  return useContext(UIContext);
}

export const useUIContext = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState<boolean>(true);

  const [isRightMenuOpen, setIsRightMenuOpen] = useState<boolean>(true);

  const handleLeftDrawerToggler = useCallback(() => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  }, [isLeftMenuOpen]);

  const handleRightDrawerToggler = useCallback(() => {
    setIsRightMenuOpen(!isRightMenuOpen);
  }, [isRightMenuOpen]);

  console.log(isLeftMenuOpen);
  console.log(isRightMenuOpen);

  return {
    isLeftMenuOpen,
    handleLeftDrawerToggler,
    isRightMenuOpen,
    handleRightDrawerToggler,
  };
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const state = useUIContext();
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
}
