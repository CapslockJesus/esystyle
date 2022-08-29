import React, {FC} from "react";
import '../../tw-esystyle.css';
import './Navbar.css'

import {NavbarMainMenuProps} from "./Navbar.types";

export const Navbar: FC<NavbarMainMenuProps> = ({
    mainMenuProps,
    navbarSubMenuProps,
    user,
    softwareName
                   }) => {

    const logo = require("./../assets/esyfy_logo_white.png");

    return (
        <>
            <nav className={"bg-neutral-900 px-2 p-4 shadow-none"}>
                <div className={"flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl"}>
                    <div>
                        <img src={logo} className={"h-10"} alt={"esyfy logo"}/>
                        {softwareName ? (
                            <span className={"text-white"}>{softwareName}</span>
                        ) : (
                            <>
                            </>
                        )}
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
                            <div className={"flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl"}>
                                <ul className={"items-center flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0"}>
                                    {navbarSubMenuProps.map(submenu => (
                                        <li>
                                            <a href={submenu.linkTo} className={"subMenu text-m md-1 text-sm"}>
                                                <div className={"flex"}>
                                                    <img src={submenu.srcIcon} className={"h-5 mr-2"} alt={submenu.altText}/>
                                                    <span className={"hover:text-amber-400"} id="home" >{submenu.name}</span>
                                                </div>
                                                <div className={"sm-menue absolute"}>
                                                    <ul className={"mt-2 bg-yellow-50"}>
                                                        {submenu.navbarSubMenuDropDownProps.map(dropdown => (
                                                            <a href={dropdown.linkTo}>
                                                                <li className={"hover:bg-yellow-400 border-b border-yellow-300 px-4 py-2"}>
                                                                    {dropdown.name}
                                                                </li>
                                                            </a>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </a>
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