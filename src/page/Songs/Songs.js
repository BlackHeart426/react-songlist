import React, { useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {headCells} from "./headTable";
import {connect} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/modules/songs";
import {showAlert, showLoader} from "../../store/action/app";
import {getAttributesDataActionCreator} from "../../store/action/modules/attributes";

const Songs = (props) => {
    const handleRequest = (id) => {
    };

    // const wrapperTags = (id) => (  { url: props.attributesList.find(item => item.id === id ).data.image, id: id } );
    const wrapperTags = (id) => {
        return { url: props.attributesList.length > 0 && props.attributesList.find(item => item.id === id ).data.image, id: id } };
    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed,
            tags: { type: 'tags', data: tags && Object.values(tags).map((id, index) => id && wrapperTags(id)) },
            action: { type: 'btn', data: [ { type: 'text', name: 'Request', handle: handleRequest }] }}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed, tags), active: item.active}
        })
    };

    const {active, setActive} = useState(false);

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);

    // useEffect(() => {
    //     props.action.getAttributesData()
    // },[]);

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
        attributesList: state.attributes.list,
        searchText: state.songs.searchText,
        songData: state.songs,
        filterAttributes: state.songs.filterAttributes,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getAttributesData: () => dispatch(getAttributesDataActionCreator()),
            getSongData: () => dispatch(getSongDataActionCreator()),
            setSelected: (data) => setSelectedActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);