var React = require('react');
var ReactRouter = require('react-router');
var RouterHanlder = ReactRouter.RouteHandler;
var LeftView = require('./public/left-view.js');
var TopNav = require('./public/top-nav.js');

var UserMain = React.createClass({

    componentDidMount : function(){
        $('#leftSide').css({backgroundColor:'#303840'}).height($(window).height());
    },

    render : function(){
        return (
            <div className='admin-page-view' id='admin_page_view'>
                <link rel="stylesheet" type="text/css" href="assets/admin/minicss/main.css" />
                <LeftView />
                <div id='rightSide'>
                    <TopNav />
                    <RouterHanlder />
                </div>
            </div>
        )
    }
});

module.exports = UserMain;