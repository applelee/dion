var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var AdminMain = require('../components/main.js');
var UserManagement = require('../components/page/user-management.js');
var MallManagement = require('../components/page/mall-management.js');
var OrderManagement = require('../components/page/order-management.js');
var NoticeManagement = require('../components/page/notice-management.js');
var SysLog = require('../components/page/sys-log.js');
var WithdrawalsManagement = require('../components/page/withdrawals-management.js');
var MessageManagement = require('../components/page/message-management.js');

//定义页面上的路由
var routes = (
    <Route path='/' name='app' handler={AdminMain}>
        <Route path='user_management' name='userManagement' handler={UserManagement} />
        <Route path='mall_management' name='mallManagement' handler={MallManagement} />
        <Route path='order_management' name='orderManagement' handler={OrderManagement} />
        <Route path='notice_management' name='noticeManagement' handler={NoticeManagement} />
        <Route path='sys_log' name='sysLog' handler={SysLog} />
        <Route path='withdrawals_management' name='withdrawalsManagement' handler={WithdrawalsManagement} />
        <Route path='message_management' name='messageManagement' handler={MessageManagement} />
        <DefaultRoute handler={UserManagement} />
    </Route>
);

module.exports = routes;