export interface NavbarMainMenuProps {
    softwareName: string,
    mainMenuProps: MainMenuProps[],
    navbarSubMenuProps: NavbarSubMenuProps[]
    user?: UserProps,
    logoProps: LogoProps
}

interface LogoProps {
    logo: string,
    altLogo: string,
    linkTo: () => void
}

interface MainMenuProps {
    linkTo: () => void,
    name: string
}

interface UserProps {
    prename: string,
    name: string,
}


interface NavbarSubMenuProps {
    id: string,
    linkTo?: () => void,
    name: string,
    srcIcon: string,
    altText: string,
    navbarSubMenuDropDownProps?: NavBarSubMenuDropdownProps[]
}

interface NavBarSubMenuDropdownProps {
    linkTo?: () => void,
    name: string
}