import React from "react";
import {Code, History, LibraryBooks, LibraryMusic, QueueMusic} from "@material-ui/icons";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BackupIcon from '@material-ui/icons/Backup';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LoopIcon from '@material-ui/icons/Loop';
import AlarmIcon from '@material-ui/icons/Alarm';
export const menuDrawerCustom = [
    {
        title: 'Список услуг',
        link: '/songs',
        icon: <FormatListBulletedIcon/>,
        index: 1
    },
    {
        title: 'В процессе',
        link: '/queue',
        icon: <LoopIcon/>,
        index: 2
    },
    {
        title: 'Запланированные',
        link: '/queue-saved',
        icon: <AlarmIcon/>,
        index: 3
    },
    {
        title: 'История',
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
        title: 'Категории',
        link: '/settings/attributes',
        icon: <LocalOfferIcon/>,
        index: 6
    },
    {
        title: 'Загрузка услуг',
        link: '/settings/song-import',
        icon: <BackupIcon/>,
        index: 7
    }
];
