import React, {FC} from "react";
import '../../tw-esystyle.css';
import './Navbar.css';

import {NavbarMainMenuProps} from "./Navbar.types";
import {Link} from "react-router-dom";

export const Navbar: FC<NavbarMainMenuProps> = ({
    mainMenuProps,
    navbarSubMenuProps,
    user,
    softwareName,
    logoProps
                   }) => {

    return (
        <>
            <nav className={"bg-neutral-900 px-2 p-4 shadow-none"}>
                <div className={"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"}>
                    <div>
                        <Link to={logoProps.linkTo}>
                        <img src={logoProps.logo} className={"h-10"} alt={logoProps.altLogo}/>
                        {softwareName ? (
                            <span className={"text-white"}>{softwareName}</span>
                        ) : (
                            <>
                                Hier ein Test
                            </>
                        )}
                        </Link>
                    </div>
                    <div className={"flex items-center"}>
                        <div className={"flex items-center w-full"}>
                            {mainMenuProps ? (
                                <>
                                    {mainMenuProps.map(mainMenu => (
                                        <a href={mainMenu.linkTo} className={"text-white px-4 py-2.5 hover:bg-neutral-200 hover:text-black text-sm rounded-lg mr-1 "}>{mainMenu.name}</a>
                                    ))}
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                        {user ? (
                            <>
                            <div>
                                <a href={"#"} className={"text-white px-4 py-2.5 hover:bg-neutral-200 hover:text-black text-sm rounded-lg mr-1 "}>Konto</a>
                                <a href={"#"} className={"text-white px-4 py-2.5 bg-red-400 hover:bg-red-500 text-sm rounded-lg mr-1 "}>Ausloggen</a>
                            </div>
                            </>
                        ) : (
                            <div>
                                <a href={"#"} className={"text-white px-4 py-2.5 hover:bg-neutral-200 hover:text-black text-sm rounded-lg mr-1 "}>Einloggen</a>
                                <a href={"#"} className={"text-white px-4 py-2.5 bg-amber-400 hover:bg-yellow-500 text-sm rounded-lg mr-1 "}>Registrieren</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div id={"divider"} className={"w-full h-1 bg-amber-400"}/>
            {user ? (
                navbarSubMenuProps ? (
                        <div className={"bg-white px-1 p-2 shadow"}>
                            <div className={"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"}>
                                <ul className={"items-center flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0"}>
                                    {navbarSubMenuProps.map(submenu => (
                                        <li>
                                            <Link to={submenu.linkTo} className={"subMenu text-m md-1 text-sm"}>
                                                <div className={"flex"}>
                                                    <img src={submenu.srcIcon} className={"h-5 mr-2"} alt={submenu.altText}/>
                                                    <span className={"hover:text-amber-400"} id="home" >{submenu.name}</span>
                                                </div>
                                                <div className={"sm-menue absolute"}>
                                                    <ul className={"mt-2 bg-yellow-50"}>
                                                        {submenu.navbarSubMenuDropDownProps?.map(dropdown => (
                                                            <Link to={dropdown.linkTo}>
                                                                <li className={"hover:bg-yellow-400 border-b border-yellow-300 px-4 py-2"}>
                                                                    {dropdown.name}
                                                                </li>
                                                            </Link>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
            ) : (
                <></>
            )}
        </>
    )
}

export default Navbar;