import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {
    notification,
    linkNotif,
    accountLinking,
    accountLinkingComplete,
} from './actions/notificationActions';
import { useDispatch } from 'react-redux';
import "./assets/Style/style";
import "react-toastify/dist/ReactToastify.css";
import "react-toggle/style.css"

const wsBase = 'https://auditor.mitigant.io:8443/';

const App = () => {

    const dispatch = useDispatch();

    const echoMessage = (mesg) => {

        const message = JSON.parse(mesg.body);
        switch (true) {
            case message.type === 'PROGRESS':
                return dispatch(linkNotif(JSON.parse(mesg.body)));
            case message.type === 'ACCOUNT_LINKING':
                return dispatch(accountLinking(JSON.parse(mesg.body)));
            case message.type === 'ACCOUNT_DISCOVERY':
                return dispatch(accountLinking(JSON.parse(mesg.body)));
            case message.type === 'ASSESSMENT':
                return dispatch(notification(JSON.parse(mesg.body)));
            case message.type === 'EMAIL_COMPLETE':
                return dispatch(accountLinkingComplete(JSON.parse(mesg.body)));
            case message.type === 'COMPLETE':
                return dispatch(accountLinkingComplete(JSON.parse(mesg.body)));
            case message.type === 'null':
                return dispatch(notification(JSON.parse(mesg.body)));
            default:
                return dispatch(notification(JSON.parse(mesg.body)));
        }
    };

    useEffect(() => {
        const socket = new SockJS(`${wsBase}notifications`);

        const stompClient = Stomp.over(socket);
        const headers = { Authorization: `Bearer ${localStorage.token}` };

        stompClient.connect(
            headers,
            () => {
                if (stompClient) {
                    const wsUrl = stompClient.ws._transport.url;
                    const wsUrlSplit = wsUrl.split('/');
                    const sessionId = wsUrlSplit[wsUrlSplit.length - 2];

                    localStorage.setItem('socketId', sessionId);
                    stompClient.subscribe('/user/queue/message', echoMessage);
                }
            },
            (error) => {
                stompClient.debug(`${error} - this error occured`);
            },
        );
    });
    return (
        <React.Fragment>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/app" component={PrivateRoute} />
                <Route path="/" component={PublicRoute} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
