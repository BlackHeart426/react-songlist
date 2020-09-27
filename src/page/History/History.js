import React, {useEffect, useState} from "react";
import TablePagination from "../../companents/TablePagination/ComponentTablePagination";
import {PTBHistory} from "./PTBHistory/PTBHistory";
import {showAlert, showLoader} from "../../store/action/app";
import {connect} from "react-redux";
import {getHistoryDataActionCreator, setSelectedHistoryActionCreator} from "../../store/action/modules/history";
import moment from "moment";
import {compose} from "redux";
import {withDrawer} from "../../companents/hoc/withDrawer";
import {useParams, withRouter} from "react-router";
import {withCheckPage} from "../../companents/hoc/withCheckPage";
import {setCurrentUserActionCreator, updateEmailCurrentUserActionCreator} from "../../store/action/currentUser";


const History = (props) => {
    const [paramsPage, setParamsPage] = useState({filter: '', idSong: ''})
    const params = useParams();
    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, amount, requestedBy, played, note} = item.data;
            return {id: item.id, idSong: item.idSong,data: createData(title, artist, amount, requestedBy, played, note), active: item.active}
        })
    };

    function createData( title, artist, amount, requestedBy, played, note) {
        return { title, artist, amount, requestedBy, played, note}
    }

    useEffect(()=>{
        props.action.update(params.userId)
        if(Object.values(props.historyList).length > 0){
            console.log('success')
        } else {
            console.log('getData')
            if(!props.historyDataNotFound){
                props.action.getHistoryData()
            }

        }
    },[props.historyList])


    useEffect(()=>{
        setParamsPage({...paramsPage, filter: params.filter, idSong: params.idSong})
        props.action.setUser(params.userId)
    },[])

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(props.songData));
    },[props.songData]);


    const headCells = [
        { id: 'title', numeric: false, order: false, disablePadding: true, editMode: true, label: 'Наименование', type: 'txt' },
        { id: 'artist', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Заказчик', type: 'txt' },
        { id: 'amount', numeric: true, order: false, disablePadding: false, editMode: true, label: 'Дата выполнения', type: 'txt' },
        { id: 'requested-by', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Работник', type: 'txt' },
        { id: 'played', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Стоимость', type: 'txt' },
        { id: 'note', numeric: false, order: false, disablePadding: false, editMode: true, label: 'Примечание', type: 'txt' },
    ];

    const handleFilter = () => {
        let songList = {...props.songData};

        if (Object.keys(songList.list).length > 0) {
            let songListTest = wrapperSong(Object.values(songList.list));
            console.log('asd', songListTest)
            const filteredSearch = songListTest.filter(item => {

                const values = Object.values(item.data);
                console.log(paramsPage)
                if (paramsPage.idSong) {
                    const song = paramsPage.idSong;
                    console.log('123',song)
                    if (item.idSong === song) {
                        return item;
                    }
                } else {
                    const search = props.searchText.toLowerCase();
                    let flag = false;
                    values.forEach(val => {
                        if (typeof val == "string") {
                            if (val.toLowerCase().indexOf(search) > -1) {
                                flag = true;
                                return;
                            }
                        }
                    })
                    if (flag) return item
                    return item.data.title.toUpperCase().indexOf(search) !== -1
                }


            });
            // const filteredSong = filteredSearch.filter(item => {
            //     const song = paramsPage.idSong;
            //     console.log('123',song)
            //     if (item.idSong === song) {
            //         return item;
            //     }
            // });
            const filtered = filteredSearch.filter(item => {
                let attributes =  {...props.filter};
                if(paramsPage.filter) {
                    attributes = [paramsPage.filter];
                } else {
                    attributes = {...props.filter};
                }

                const datePlayed = item.data.played;
                let flag = false;
                const list = Object.values(attributes);
                var now = moment().format();
                list.forEach(item => {
                    switch (item) {
                        case "all":
                            flag = true;
                            break;
                        case "stream":
                            if( moment(now).isSame(datePlayed, 'day') !== false) {
                                flag = true;
                            }
                            break;
                        case "day":
                            if( moment(now).isSame(datePlayed, 'day') !== false) {
                                flag = true;
                            }
                            break;
                        case "month":
                            if( moment(now).isSame(datePlayed, 'month') !== false) {
                                flag = true;
                            }
                            break;
                        case "year":
                            if( moment(now).isSame(datePlayed, 'year') !== false) {
                                flag = true;
                            }
                            break;


                    }
                })

                // if (val.data.forEach(valItem => {
                //
                //     if (list.find(item => item === valItem.id)) {
                //         flag = true;
                //         return;
                //     }
                // })) ;
                if (flag) return item
            });
            filtered.forEach(item => item.data.played =  moment(item.data.played).fromNow());
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
            <PTBHistory params={params.filter}/>
            <TablePagination
                onSelectRow = {(data) => props.action.setSelected(data)}
                headCells = {headCells}
                rowsData = {handleFilter()}
            />
        </>
    )
}


const mapStateToProps = state => {
    return {
        filter: state.history.filterData,
        searchText: state.history.searchText,
        songData: state.history,
        historyList: state.history.list,
        historyDataNotFound: state.history.dataNotFound,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            setSelected: (data) => setSelectedHistoryActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader()),
            getHistoryData: () => dispatch(getHistoryDataActionCreator()),
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
(History);
