
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store' 

import Loader from './Components/Loader'; 


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),

    },
});


ReactDOM.render(
    <Loader />

    , document.getElementById('load'));


setTimeout(() => {

    ReactDOM.render(

        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>

        , document.getElementById('root'));
}, 2000);


serviceWorker.register();
