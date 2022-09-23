import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './redux/reducer'  //*postReducer = rootReducer
import { Provider } from 'react-redux';

const store = configureStore({ reducer: rootReducer })

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)