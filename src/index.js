import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import rootReducer from './redux/reducer'; //*postReducer = rootReducer
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { data_base } from './database/config';

const store = configureStore({ reducer: rootReducer,
                               middleware: getDefaultMiddleware =>
                               getDefaultMiddleware(thunk) })

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)