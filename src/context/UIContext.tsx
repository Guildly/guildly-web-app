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
  isGuildDialogOpen?: boolean;
  isConnectMenuOpen?: boolean;
  isTransactionCartOpen?: boolean;
  isDepositDialogOpen?: boolean;
  isMobileMenuOpen?: boolean;
  toggleGuildDialog: () => void;
  toggleConnectMenu: () => void;
  toggleTransactionCart: () => void;
  toggleDepositDialog: () => void;
  toggleMobileMenu: () => void;
}

const UI_INITIAL_STATE: UIState = {
  isLeftMenuOpen: true,
  handleLeftDrawerToggler: () => undefined,
  isRightMenuOpen: true,
  handleRightDrawerToggler: () => undefined,
  isGuildDialogOpen: false,
  isConnectMenuOpen: false,
  isTransactionCartOpen: false,
  isDepositDialogOpen: false,
  isMobileMenuOpen: false,
  toggleGuildDialog: () => undefined,
  toggleConnectMenu: () => undefined,
  toggleTransactionCart: () => undefined,
  toggleDepositDialog: () => undefined,
  toggleMobileMenu: () => undefined,
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

  const [isGuildDialogOpen, setIsGuildDialogOpen] = useState(false);
  const [isConnectMenuOpen, setIsConnectMenuOpen] = useState(false);
  const [isTransactionCartOpen, setIsTransactionCartOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleGuildDialog = () => {
    setIsGuildDialogOpen(!isGuildDialogOpen);
  };

  const toggleConnectMenu = () => {
    setIsConnectMenuOpen(!isConnectMenuOpen);
  };

  const toggleTransactionCart = () => {
    setIsTransactionCartOpen(!isTransactionCartOpen);
  };

  const toggleDepositDialog = () => {
    setIsDepositDialogOpen(!isDepositDialogOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return {
    isLeftMenuOpen,
    handleLeftDrawerToggler,
    isRightMenuOpen,
    handleRightDrawerToggler,
    isGuildDialogOpen,
    isConnectMenuOpen,
    isTransactionCartOpen,
    isDepositDialogOpen,
    isMobileMenuOpen,
    toggleGuildDialog,
    toggleConnectMenu,
    toggleTransactionCart,
    toggleDepositDialog,
    toggleMobileMenu,
  };
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const state = useUIContext();
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
}
