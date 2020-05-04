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
            const currentUser = localStorage.getItem('currentUser')
            // if(currentUser === match.params.userId){
            //     this.setState(() => ({ existPage: true }));
            // } else {
                getDataPageBlogFireBase(match.params.userId)
                    .then((snapshot) => {
                        if(snapshot.val() === null){
                            console.log(snapshot.val())
                            this.setState(() => ({ existPage: false }));
                        } else {
                            console.log('yyyyyyyyyyyy')
                            this.setState(() => ({ existPage: true }));
                            const currentUser = match.params.userId
                            localStorage.setItem("currentUser", currentUser)
                        }
                    })
                    .catch(error => {
                        this.setState(() => ({ existPage: false }));
                    })
            // }


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