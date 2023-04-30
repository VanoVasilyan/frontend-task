import { Dispatch, SetStateAction } from 'react';

interface NavbarItemChildProps {
    id: number;
    title: string
}

export interface ListItemProps {
    id: number,
    type: string,
    title: string,
    name: string,
    image: string,
    created: string,
    viewed: string,
    info: string
}

export interface NavbarItemProps {
    id: number;
    title: string;
    child: NavbarItemChildProps[] | null
}

export interface IContextType {
    isShowSideBar: boolean;
    setIsShowSideBar: Dispatch<SetStateAction<boolean>>;
    showSideBar: () => void;
}
