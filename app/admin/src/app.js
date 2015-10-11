var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./config/routes.js');

// 将匹配的路由渲染到 DOM 中
ReactRouter.run(routes, function(Root){
    React.render(<Root />,$("#rootView")[0]);
});
