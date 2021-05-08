import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import axios from './util/Api';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const checkTokenExpiry = () => (next) => async (action) => {
    const token = localStorage.getItem('token');
    if (token) {
        const expiryTime = new Date(jwtDecode(token).exp * 1000);
        const timeToTrigger = new Date(expiryTime - 1000 * 60 * 5);
        const currentTime = new Date(Date.now());

        if (timeToTrigger < currentTime) {
            axios.post('/refresh-token')
                .then(({ data }) => {
                    if (data) {
                        localStorage.setItem('token', data.responseObject.token);
                        axios.defaults.headers.common.Authorization = `Bearer ${data.responseObject.token}`;
                    }
                })
                .catch((error) => {
                    const message = error.response
                        ? error.response.data.message
                        : error.message;
                    toast.error(message);
                });
        }
    }

    next(action);
};

// const middlewares = [checkTokenExpiry, thunk];
// const enhancer = compose(applyMiddleware(checkTokenExpiry, thunk, routeMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(checkTokenExpiry, thunk, routeMiddleware)),
);

export { history };

const { dispatch } = store;

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            delete axios.defaults.headers.common.Authorization;
            localStorage.clear();
            dispatch({
                type: 'SIGNOUT',
            });
        }
        return Promise.reject(error);
    },
);