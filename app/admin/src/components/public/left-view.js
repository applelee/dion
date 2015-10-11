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
                        <li className="dash"><a title=""><span>管理员选项</span><strong>7</strong></a>
                            <ul className="sub">
                                <li><a href='#/' title="">会员管理</a></li>
                                <li><a href='#/mall_management' title="">商城管理</a></li>
                                <li><a href='#/order_management' title="">订单管理</a></li>
                                <li><a href='#/notice_management' title="">公告管理</a></li>
                                <li><a href='#/sys_log' title="">系统日志</a></li>
                                <li><a href='#/withdrawals_management' title="">提现管理</a></li>
                                <li><a href='#/message_management' title="">留言管理</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = LeftView;