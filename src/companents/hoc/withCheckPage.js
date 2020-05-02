import React, {Component} from "react";
import {getDataPageBlogFireBase} from "../../firebaseService";
import {Loading} from "../../page/Loading";
import {BlogNonFound} from "../../page/PageNonFound";
import {useParams} from "react-router";

export const withCheckPage = (Component) => {

    return class WithCheckPage extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                existPage: null
            };

        }


        componentDidMount() {
            const {match} = this.props
            getDataPageBlogFireBase(match.params.userId)
                .then((snapshot) => {
                    if(snapshot.val() === null){
                        this.setState(() => ({ existPage: false }));
                    } else {
                        this.setState(() => ({ existPage: true }));
                    }
                })
                .catch(error => {
                    this.setState(() => ({ existPage: false }));
                })

        }


        render() {
            const { existPage } = this.state;
            const userId = localStorage.getItem('userId')
            const {match} = this.props
            if(existPage === null) {
                return <Loading isLoading={true}/>
            } else {
                if(existPage === false){
                    return <BlogNonFound/>
                } else if(existPage === true) {
                    return <Component isAuth={userId ? true : false}/>
                }
            }
        }
    }
}