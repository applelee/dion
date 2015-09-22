var React = require('react');

var LeftView = React.createClass({
    render : function(){
        return (
            <div className='left-view' id="leftSide">
                <div className="logo"><a href='#/user_back_stage/'><img src="images/logo.png" alt="" /></a></div>

                <ul id="menu" className="nav">
                    <li className="dash"><a title=""><span>系统公告</span><strong>1</strong></a>
                        <ul className="sub">
                            <li><a href='#/user_back_stage/' title="">公告信息</a></li>
                        </ul>
                    </li>
                    <li className="charts"><a title=""><span>在线商城</span><strong>1</strong></a>
                        <ul className="sub">
                            <li><a title="">商城主页</a></li>
                        </ul>
                    </li>
                    <li className="forms"><a title="" className="exp"><span>订单管理</span><strong>1</strong></a>
                        <ul className="sub">
                            <li><a title="">订单列表</a></li>
                        </ul>
                    </li>
                    <li className="tables"><a title="" className="exp"><span>业绩查询</span><strong>4</strong></a>
                        <ul className="sub">
                            <li><a href='#/user_back_stage/performance_query' title="">个人业绩</a></li>
                            <li><a href='#/user_back_stage/team_performance' title="">团队业绩</a></li>
                            <li><a href='#/user_back_stage/market_performance' title="">市场业绩</a></li>
                            <li><a href='#/user_back_stage/bonus_query' title="">奖金查询</a></li>
                        </ul>
                    </li>
                    <li className="ui"><a title=""><span>个人中心</span><strong>4</strong></a>
                        <ul className="sub">
                            <li><a href='#/user_back_stage/user_center' title="">个人信息</a></li>
                            <li><a href='#/user_back_stage/binding_info' title="">绑定信息</a></li>
                            <li><a href='#/user_back_stage/virtual_account' title="">电子账户</a></li>
                            <li><a href='#/user_back_stage/fund_account' title="">基金账户</a></li>
                        </ul>
                    </li>
                    <li className="widgets"><a title="" className="exp"><span>系统留言</span><strong>1</strong></a>
                        <ul className="sub">
                            <li><a href='#/user_back_stage/sys_message' title="">系统留言</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
});

module.exports = LeftView;