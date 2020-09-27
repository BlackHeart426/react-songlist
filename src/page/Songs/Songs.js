import React, { useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {headCells} from "./headTable";
import {connect} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/modules/songs";
import {showAlert, showLoader} from "../../store/action/app";
import {getAttributesDataActionCreator} from "../../store/action/modules/attributes";
import moment from "moment";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer"
import {withWidth} from "@material-ui/core";
import DrawerCustom from "../../companents/Drawer/DrawerCustom";
import {useHistory, useParams, useRouteMatch, withRouter} from "react-router";
import matchPath from "react-router/modules/matchPath";
import {addSongInQueueActionCreator} from "../../store/action/modules/queue";
import {withCheckPage} from "../../companents/hoc/withCheckPage";
import {setCurrentUserActionCreator, updateEmailCurrentUserActionCreator} from "../../store/action/currentUser";

const Songs = (props) => {
    const params = useParams();

    const handleRequest = (id) => {
        const songData = Object.values(props.songData.list).find(item => item.id === id)
        console.log(songData)

        const template = {
            title: '',
            artist: '',
            requestedBy: '',
            note: '',
            amount: '0',
        }
        template.title = songData.data.title;
        template.artist = songData.data.artist;
        props.action.addSong(template, id)
    };

    // const wrapperTags = (id) => (  { url: props.attributesList.find(item => item.id === id ).data.image, id: id } );
    const wrapperTags = (id) => {
        return { url: props.attributesList.length > 0 && props.attributesList.find(item => item.id === id ).data.image, id: id } };
    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed,
            tags: { type: 'tags', data: tags && Object.values(tags).map((id, index) => id && wrapperTags(id)) },
            action: { type: 'btn', data: [ { type: 'text', name: 'Выбрать', handle: handleRequest }] }}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed,  lastPlayed === 'never' ? lastPlayed : lastPlayed && moment(lastPlayed).fromNow(), tags), active: item.active}
        })
    };

    const {active, setActive} = useState(false);

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);

    useEffect(()=>{
        props.action.setUser(params.userId)

    },[])

    useEffect(()=>{
        console.log(params.userId)
        props.action.update(params.userId)
        props.action.getAttributesData()
        if(Object.values(props.songsList).length > 0){
        } else {
            if(!props.songsDataNotFound){
                props.action.getSongData(params.userId)
            }

        }
    },[props.songsList])

    const handleFilter = () => {
        let songList = {...props.songData};
        if (Object.keys(songList.list).length > 0) {
            let songListTest = wrapperSong(Object.values(songList.list));
            const filteredSearch = songListTest.filter(item => {
                const values = Object.values(item.data);
                const search = props.searchText.toLowerCase();

                let flag = false;

                values.forEach(val => {
                     if(typeof val == "string"){
                        if (val.toLowerCase().indexOf(search) > -1) {
                            flag = true;
                            return;
                        }
                    }
                })
                if (flag) return item
            });
            const filtered = filteredSearch.filter(item => {
                const values = Object.values(item.data);
                const attributes = {...props.filterAttributes};
                let flag = false;
                const list = Object.values(attributes);
                if(list.length > 0) {
                    values.forEach(val => {
                        if (typeof val == "object") {
                            if (val.data.forEach(valItem => {

                                if (list.find(item => item === valItem.id)) {
                                    flag = true;
                                    return;
                                }
                            })) ;
                        }
                    });

                    if (flag) return item
                } else  {
                    return item
                }

            });
            songList.list = filtered;
            return (
                songList
            )
        } else {
            return songList
        }

    };


    return (
        <>
            {/*<div>{props.match.params.userId}</div>*/}
            <PTBSongs showActive={active}/>
            <TablePagination
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {handleFilter()}
                showActive={active}
            />
        </>
    )
};


const mapStateToProps = state => {
    return {
        songsList: state.songs.list,
        attributesList: state.attributes.list,
        searchText: state.songs.searchText,
        songData: state.songs,
        filterAttributes: state.songs.filterAttributes,
        songsDataNotFound: state.songs.dataNotFound,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getAttributesData: () => dispatch(getAttributesDataActionCreator()),
            getSongData: (userId) => dispatch(getSongDataActionCreator(userId)),
            setSelected: (data) => setSelectedActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader()),
            addSong: (song, uuid) =>  dispatch(addSongInQueueActionCreator(song, uuid)),
            setUser: (currentUser) => dispatch(setCurrentUserActionCreator(currentUser)),
            update: (currentUser) => dispatch(updateEmailCurrentUserActionCreator(currentUser)),
        }
    }
};

export default compose(
    withDrawer,
    withRouter,
    withCheckPage,
    connect(mapStateToProps, mapDispatchToProps))
(Songs);
