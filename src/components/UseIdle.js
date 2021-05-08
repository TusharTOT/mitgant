import React, { useState, useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/Auth';
import { UsePrompt } from './Modals/UsePrompt';

const UseIdle = () => {
    const dispatch = useDispatch();

    const idleRef = useRef();
    const timeOutRef = useRef(null);

    const [countDown] = useState(1000 * 60 * 30); // 30mins countdown
    const [modal, SetModal] = useState(false);

    const toggle = (value) => {
        SetModal(value);
    };

    const stayLoggedIn = () => {
        toggle(false);
        clearTimeout(timeOutRef.current);
    };

    const userLogout = () => {
        clearTimeout(timeOutRef.current);
        dispatch(logOut());
    };

    const onIdle = () => {
        toggle(true);
        timeOutRef.current = setTimeout(() => {
            userLogout();
        }, 1000 * 60 * 5);
    };
    return (
        <>
            <IdleTimer
                ref={idleRef}
                onIdle={onIdle}
                debounce={250}
                timeout={countDown}
            />
            <UsePrompt
                modal={modal}
                onHide={toggle}
                stayLoggedIn={stayLoggedIn}
                logout={userLogout}
            />
        </>
    );
};

export default UseIdle;
