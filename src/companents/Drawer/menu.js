import React from "react";
import {Code, History, LibraryBooks, LibraryMusic, QueueMusic} from "@material-ui/icons";

export const menuDrawerCustom = [

    {
        title: 'Songs',
        link: 'songs',
        icon: <LibraryMusic/>
    },
    {
        title: 'Queue',
        link: 'queue',
        icon: <QueueMusic/>
    },
    {
        title: 'Saved queue',
        link: 'saved-queue',
        icon: <LibraryBooks/>
    },
    {
        title: 'History',
        link: 'history',
        icon: <History/>
    },
]

export const subMenuDrawerCustom = [
    {
        title: 'Bot commands',
        link: 'bot-commands',
        icon: <Code/>
    },
]