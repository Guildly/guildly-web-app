import { createContext, useContext, useState } from "react";

export interface UIState {
  /** The state of the UI layout. */
  isLeftMenuOpen?: boolean;
  setIsLeftMenuOpen: (isLeftMenuOpen: boolean) => void;
  isRighttMenuOpen?: boolean;
  setIsRightMenuOpen: (isRightMenuOpen: boolean) => void;
}

const UI_INITIAL_STATE: UIState = {
  isLeftMenuOpen: true,
  setIsLeftMenuOpen: () => undefined,
  isRighttMenuOpen: true,
  setIsRightMenuOpen: () => undefined,
};

const UIContext = createContext<UIState>(UI_INITIAL_STATE);

export const useUIContext = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState<boolean>(true);

  const [isRightMenuOpen, setIsRightMenuOpen] = useState<boolean>(true);

  return {
    isLeftMenuOpen,
    setIsLeftMenuOpen,
    isRightMenuOpen,
    setIsRightMenuOpen,
  };
};

export function useUI(): UIState {
  return useContext(UIContext);
}

export function UIProvider({ children }: { children: React.ReactNode }) {
  const state = useUIContext();
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
}
