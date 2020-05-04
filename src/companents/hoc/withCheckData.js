import React, {Component} from "react";
import {getCheckDataFireBase, getDataPageBlogFireBase} from "../../firebaseService";
import {Loading} from "../../page/Loading";
import {BlogNonFound} from "../../page/PageNonFound";
import {useParams} from "react-router";
import {
    getAllDataActionCreator,
    hideLoader, isPageUserActionCreator,
    showAlert,
    showLoader,
    toggleEditModeActionCreator
} from "../../store/action/app";
import {getAttributesDataActionCreator} from "../../store/action/modules/attributes";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/modules/songs";
import {getQueueDataActionCreator} from "../../store/action/modules/queue";
import {getSavedQueueDataActionCreator} from "../../store/action/modules/savedQueue";
import {getHistoryDataActionCreator} from "../../store/action/modules/history";
import {autoLogin} from "../../store/action/auth";

export const withCheckData = (Component) => {

    return class WithCheckData extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                dataPage: null
            };

        }


        componentDidMount() {
            const {match} = this.props
            getCheckDataFireBase('songs',match.params.userId)
                .then((snapshot) => {
                    if(snapshot.val() === null){
                        this.setState(() => ({ dataPage: null }));
                    } else {
                        this.setState(() => ({ dataPage: snapshot.val() }));
                    }
                })
                .catch(error => {
                    this.setState(() => ({ dataPage: null }));
                })

        }

        mapStateToProps = state => ({
            songsList: state.songs.list,
            attributesList: state.attributes.list,
            queueList: state.queue.list,
            savedQueueList: state.savedQueue.list,
            historyList: state.history.list,

        });

        mapDispatchToProps = dispatch => {
            return {
                action: {
                    getAttributesData: () => dispatch(getAttributesDataActionCreator()),
                    getSongData: () => dispatch(getSongDataActionCreator()),
                    getQueueData: () => dispatch(getQueueDataActionCreator()),
                    getSavedQueueData: () => dispatch(getSavedQueueDataActionCreator()),
                    getHistoryData: () => dispatch(getHistoryDataActionCreator()),
                }
            }
        };


        render() {
            console.log('songsList',this.props.songsList)
            const { dataPage } = this.state;
            if(dataPage === null) {
                return <Loading isLoading={true}/>
            } else {
                if(dataPage === false){
                    return <BlogNonFound/>
                } else if(dataPage === true) {
                    return <Component />
                }
            }
        }
    }
}