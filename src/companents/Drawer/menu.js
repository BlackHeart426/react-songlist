import React from "react";
import {Code, History, LibraryBooks, LibraryMusic, QueueMusic} from "@material-ui/icons";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BackupIcon from '@material-ui/icons/Backup';
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
    // {
    //     title: 'Test',
    //     link: '/test',
    //     icon: <History/>,
    //     index: 5
    // },
];

export const subMenuDrawerCustom = [
    {
        title: 'Bot commands',
        link: '/bot-commands',
        icon: <Code/>,
        index: 5
    },
];

export const settingsMenuCustom = [
    {
        title: 'Song attributes',
        link: '/settings/attributes',
        icon: <LocalOfferIcon/>,
        index: 6
    },
    {
        title: 'Song import',
        link: '/settings/song-import',
        icon: <BackupIcon/>,
        index: 7
    }
];