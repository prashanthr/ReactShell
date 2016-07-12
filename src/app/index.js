/*jslint node:true*/
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.hashHistory;

ReactDOM.render((
    <Router history={History}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('content'));