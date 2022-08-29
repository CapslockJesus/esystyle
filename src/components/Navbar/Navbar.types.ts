export interface NavbarMainMenuProps {
    softwareName: string,
    mainMenuProps: MainMenuProps[],
    navbarSubMenuProps: NavbarSubMenuProps[]
    user: UserProps
}

interface MainMenuProps {
    linkTo: string,
    name: string
}

interface UserProps {
    prename: string,
    name: string,
}


interface NavbarSubMenuProps {
    id: string,
    linkTo: string,
    name: string,
    srcIcon: string,
    altText: string,
    navbarSubMenuDropDownProps: NavBarSubMenuDropdownProps[]
}

interface NavBarSubMenuDropdownProps {
    linkTo: string,
    name: string
}