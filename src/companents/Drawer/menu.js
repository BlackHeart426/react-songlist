import React from "react";
import {Code, History, LibraryBooks, LibraryMusic, QueueMusic} from "@material-ui/icons";

export const menuDrawerCustom = [

    {
        title: 'Songs',
        link: '/songs',
        icon: <LibraryMusic/>,
        index: 1
    },
    {
        title: 'Queue',
        link: '/queue',
        icon: <QueueMusic/>,
        index: 2
    },
    {
        title: 'Saved queue',
        link: '/queue-saved',
        icon: <LibraryBooks/>,
        index: 3
    },
    {
        title: 'History',
        link: '/history',
        icon: <History/>,
        index: 4
    },
]

export const subMenuDrawerCustom = [
    {
        title: 'Bot commands',
        link: '/bot-commands',
        icon: <Code/>,
        index: 5
    },
]