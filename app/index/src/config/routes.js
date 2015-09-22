var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Main = require('../components/main.js');
var Home = require('../components/page/home.js');
var About = require('../components/page/about.js');
var Products = require('../components/page/products.js');
var Product = require('../components/page/product.js');
var Login = require('../components/page/login.js');
var Register = require('../components/page/register.js');

//定义页面上的路由
var routes = (
    <Route path='/' name='index' handler={Main}>
        <Route path='home' name='home' handler={Home} />
        <Route path='about' name='about' handler={About} />
        <Route path='products' name='products' handler={Products} />
        <Route path='product/:product_id' name='product' handler={Product} />
        <Route path='login' name='login' handler={Login} />
        <Route path='register' name='register' handler={Register} />
        <DefaultRoute handler={Home} />
    </Route>
);

module.exports = routes;