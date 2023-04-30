import { createContext, useContext, useState } from 'react';
import { IContextType } from './types';

const AppContext = createContext<Partial<IContextType>>({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);

    const showSideBar = () => setIsShowSideBar(prev => !prev);

    return (
        <AppContext.Provider
            value={{
                isShowSideBar,
                setIsShowSideBar,
                showSideBar
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
