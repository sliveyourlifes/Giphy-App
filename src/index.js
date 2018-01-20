import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import AddGiphy from './containers/AddGiphy'
import GiphyList from './containers/GiphyList'

import './index.css';

const store = createStore(rootReducer,applyMiddleware(thunk));

class App extends Component {
    render() {
        return(
            <div className='main-wrapper'>
            <h1 className='main-title'>Search Giphy</h1>
                <AddGiphy/>
                <GiphyList/>
            </div>
        )
             
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

