import { useGlobalContext } from '../../context/context';

import Logo from '../../images/Logo.svg';
import HamburgerIcon from '../../images/HamburgerMenu.svg';
import SearchIcon from '../../images/Search.svg';
import MobileLogo from '../../images/Mobile-LogoType.svg';

import './Header.css';

const Header = () => {
    const { showSideBar } = useGlobalContext();

    return (
        <header>
            <div className='logoPart'>
                <button onClick={showSideBar} className='hamburger'>
                    <img src={HamburgerIcon} alt='HamburgerIcon' />
                </button>
                <picture>
                    <source media='(max-width:375px)' srcSet={MobileLogo} />
                    <img src={Logo} alt='Logo' />
                </picture>
                <button className='searchButton'>
                    <img src={SearchIcon} alt='Search' />
                </button>
            </div>
        </header>
    )
}

export default Header
