import { useRef, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';
import { navbarItems } from '../../context/utils';
import ArroDownIcon from '../../images/ArrowDown.svg';
import CloseIcon from '../../images/CloseIcon.svg';
import ArrowRightIcon from '../../images/ArrowRightIcon.svg';
import Logo from '../../images/Logo.svg';
import MobileLogo from '../../images/Mobile-LogoType.svg';

import './Navbar.css';

const Navbar = () => {
    const { isShowSideBar, showSideBar, setIsShowSideBar } = useGlobalContext();
    const navBarRef = useRef<HTMLDivElement>(null);
    const prevScrollPositionRef = useRef(window.pageYOffset);

    const onScroll = useCallback(() => {
        let currentScrollpos = window.pageYOffset;
        if (navBarRef.current) {
            if (window.pageYOffset < 300) {
                navBarRef.current.style.top = '0';
            } else if (prevScrollPositionRef.current > currentScrollpos) {
                navBarRef.current.style.top = '0';
            } else {
                navBarRef.current.style.top = '-100px';
            }
            prevScrollPositionRef.current = currentScrollpos;
        }
    }, [navBarRef])


    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [onScroll])

    return (
        <nav ref={navBarRef} className={`${isShowSideBar ? 'bloored' : ''} `}>
            <ul className='menu'>
                {
                    navbarItems.map(({ id, title, child }) => (
                        <li className='parent' key={id}>
                            <a href='#/'>
                                <span>{title}</span>
                                {title !== 'Buy Now' ? <img src={ArroDownIcon} alt='ArroDownIcon' /> : null}
                            </a>
                            {child?.length ? (
                                <ul className='child'>
                                    {
                                        child.map(({ id, title }, index) => <li className={`${index !== child.length - 1 ? 'borderBottom' : ''} parent`} key={id}>
                                            <a href='#/'>
                                                <span>{title}</span>
                                                <img src={ArrowRightIcon} alt='ArrowRightIcon' />
                                            </a>
                                        </li>)
                                    }
                                </ul>
                            ) : null}
                        </li>
                    ))
                }
            </ul>
            <div className={`${isShowSideBar ? 'show' : 'hide'} hidden`}>
                <div className='logoPart borderBottom'>
                    <picture>
                        <source media='(max-width:375px)' srcSet={MobileLogo} />
                        <img src={Logo} alt='Logo' />
                    </picture>
                    <button onClick={showSideBar} className='hamburger'>
                        <img src={CloseIcon} alt='HamburgerIcon' />
                    </button>
                </div>
                <ul>
                    {
                        navbarItems.map(({ id, title, child }, index) => (
                            <li className={`${index !== navbarItems.length - 1 ? 'borderBottom' : ''} parent`} key={id}>
                                <a href='#/'>
                                    <span>{title}</span>
                                    {title !== 'Buy Now' ? <img src={ArroDownIcon} alt='ArroDownIcon' /> : null}
                                </a>
                                {child?.length ? (
                                    <ul className='child'>
                                        {
                                            child.map(({ id, title }, index) =>
                                                <li className={`${index !== child.length - 1 ? 'borderBottom' : ''} parent`} key={id}>
                                                    <a href='#/'>
                                                        <span>{title}</span>
                                                        <img src={ArrowRightIcon} alt='ArrowRightIcon' />
                                                    </a>
                                                </li>)
                                        }
                                    </ul>
                                ) : null}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
