import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';

const store = configureStore();
let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LexiTheme}>
                <IndexRoute component={PostsContainer} />
                <Route path=":pageNum" component={PostsContainer} />
                <Route path="about" component={AboutPageContainer} />
                <Route path="/post/:postId" component={PostContainer} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);

