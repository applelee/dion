var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var UserMain = require('../components/main.js');
var SysInfo = require('../components/page/sys-info.js');
var MallHome = require('../components/page/mall-home.js');
var ProductDetail = require('../components/page/product-detail.js');
var ShoppingCart = require('../components/page/shopping-cart.js');
var Pay = require('../components/page/pay.js');
var OrderList = require('../components/page/order-list.js');
var OrderDetail = require('../components/page/order-detail.js');
var PersonalPerformance = require('../components/page/personal-performance.js');
var TeamPerformance = require('../components/page/team-performance.js');
var MarketPerformance = require('../components/page/market-performance.js');
var BonusQuery = require('../components/page/bonus-query.js');
var UserInfo = require('../components/page/user-info.js');
var SysMessage = require('../components/page/sys-message.js');
var BindingInfo = require('../components/page/binding-info.js');
var VirtualAccount = require('../components/page/virtual-account.js');
var FundAccount = require('../components/page/fund-account.js');

//定义页面上的路由
var routes = (
    <Route path='/' name='app' handler={UserMain}>
        <Route path='sys_info' name='sysInfo' handler={SysInfo} />
        <Route path='mall' name='mall' handler={MallHome} />
        <Route path='product_detail/:productId' name='productDetail' handler={ProductDetail} />
        <Route path='shopping_cart' name='shoppingCart' handler={ShoppingCart} />
        <Route path='pay' name='pay' handler={Pay} />
        <Route path='order_list' name='orderList' handler={OrderList} />
        <Route path='order_detail/:orderId' name='orderDetail' handler={OrderDetail} />
        <Route path='personal_performance' name='personalPerformance' handler={PersonalPerformance} />
        <Route path='team_performance' name='teamPerformance' handler={TeamPerformance} />
        <Route path='market_performance' name='marketPerformance' handler={MarketPerformance} />
        <Route path='bonus_query' name='bonusQuery' handler={BonusQuery} />
        <Route path='user_center' name='userCenter' handler={UserInfo} />
        <Route path='binding_info' name='bindingInfo' handler={BindingInfo} />
        <Route path='virtual_account' name='virtualAccount' handler={VirtualAccount} />
        <Route path='fund_account' name='fundAccount' handler={FundAccount} />
        <Route path='sys_message' name='sysMessage' handler={SysMessage} />
        <DefaultRoute handler={SysInfo} />
    </Route>
);

module.exports = routes;