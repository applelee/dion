var React = require('react');

var LeftView = React.createClass({

    componentDidMount : function(){
        var winH = $(window).height();

        $('#menu_box').height(winH - 60);
    },

    render : function(){
        return (
            <div className='left-view' id="leftSide">
                <div className="logo"><a href='#/'><img src="./assets/images/logo.png" alt="" /></a></div>

                <div id='menu_box'>
                    <ul id="menu" className="nav">
                        <li className="dash"><a title=""><span>系统公告</span><strong>1</strong></a>
                            <ul className="sub">
                                <li><a href='#/' title="">公告信息</a></li>
                            </ul>
                        </li>
                        <li className="charts"><a title=""><span>在线商城</span><strong>3</strong></a>
                            <ul className="sub">
                                <li><a href='#/mall' title="">商城主页</a></li>
                                <li><a href='#/shopping_cart' title="">购物车</a></li>
                                <li><a href='#/pay' title="">支付</a></li>
                            </ul>
                        </li>
                        <li className="forms"><a title="" className="exp"><span>订单管理</span><strong>1</strong></a>
                            <ul className="sub">
                                <li><a href='#/order_list' title="">订单列表</a></li>
                            </ul>
                        </li>
                        <li className="tables"><a title="" className="exp"><span>业绩查询</span><strong>4</strong></a>
                            <ul className="sub">
                                <li><a href='#/personal_performance' title="">个人业绩</a></li>
                                <li><a href='#/team_performance' title="">团队业绩</a></li>
                                <li><a href='#/market_performance' title="">市场业绩</a></li>
                                <li><a href='#/bonus_query' title="">奖金查询</a></li>
                            </ul>
                        </li>
                        <li className="ui"><a title=""><span>个人中心</span><strong>4</strong></a>
                            <ul className="sub">
                                <li><a href='#/user_center' title="">个人信息</a></li>
                                <li><a href='#/binding_info' title="">绑定信息</a></li>
                                <li><a href='#/virtual_account' title="">电子账户</a></li>
                                <li><a href='#/fund_account' title="">基金账户</a></li>
                            </ul>
                        </li>
                        <li className="widgets"><a title="" className="exp"><span>系统留言</span><strong>1</strong></a>
                            <ul className="sub">
                                <li><a href='#/sys_message' title="">系统留言</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = LeftView;