import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Navbar as Component} from "./Navbar";

const logo = require("./../assets/esyfy_logo_white.png");
const img1 = require("./../assets/home.png");
const img2 = require("./../assets/Reprice.png");
const img3 = require("./../assets/Synchro.png");

export default {
    title: 'ESYSTYLE/COMPONENTS/Navbar',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: 'Use this TextField!'
            }
        },
        actions: {
            handles: ['mouseover', 'onClick'],
        },
    }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.storyName = "Logged Out";
LoggedOut.args = {
    logoProps: {logo: logo, altLogo: 'esyfy logo', linkTo: () => {window.location.href = '#'}},
    softwareName: "esycalc",
    mainMenuProps: [
        {linkTo: () => {window.location.href = '#'}, name: "Dokumentation"},
        {linkTo: () => {window.location.href = '#'}, name: "Hilfe"}
    ]
}

export const LoggedIn = Template.bind({});
LoggedIn.storyName = "Logged In";
LoggedIn.args = {
    logoProps: {logo: logo, altLogo: 'esyfy logo', linkTo: () => {window.location.href = '#'}},
    softwareName: "esycalc",
    user: {name: "Mustermann", prename: "Max"},
    mainMenuProps: [
        {linkTo: () => {window.location.href = '#'}, name: "Dokumentation"},
        {linkTo: () => {window.location.href = '#'}, name: "Hilfe"}
    ]
}

export const LoggedInWithSubmenu = Template.bind({});
LoggedInWithSubmenu.storyName = "Logged In with Submenu";
LoggedInWithSubmenu.args = {
    logoProps: {logo: logo, altLogo: 'esyfy logo', linkTo: () => {window.location.href = '#'}},
    softwareName: "esycalc",
    user: {name: "Mustermann", prename: "Max"},
    mainMenuProps: [
        {linkTo: () => {window.location.href = '#'}, name: "Dokumentation"},
        {linkTo: () => {window.location.href = '#'}, name: "Hilfe"}
    ],
    navbarSubMenuProps: [
        {
            id: "abc", linkTo: () => {window.location.href = '#'}, name: "Startseite", srcIcon: img1, altText:"home icon"
        },
        {
            id: "reprice", linkTo: () => {window.location.href = '/'}, name: "Reprice", srcIcon: img2, altText:"reprice icon",
            navbarSubMenuDropDownProps: [
                {linkTo: () => {window.location.href = '#'}, name: "Reprice Menu #1"},
                {linkTo: () => {window.location.href = '#'}, name: "Reprice Menu #1"},
                {linkTo: () => {window.location.href = '#'}, name: "Reprice Menu #1"},
                {linkTo: () => {window.location.href = '#'}, name: "Reprice Menu #1"},
            ]
        },
        {
            id: "synchro", linkTo: () => {window.location.href = '#'}, name: "Synchronisieren", srcIcon: img3, altText:"sync icon",
            navbarSubMenuDropDownProps: [
                {linkTo: () => {window.location.href = '#'}, name: "Komm Synchro mich Menu #1"},
                {linkTo: () => {window.location.href = '#'}, name: "Synchronisieren Menu #2"},
                {linkTo: () => {window.location.href = '#'}, name: "Synchronisieren Menu #3"},
            ]
        }
    ]
}
