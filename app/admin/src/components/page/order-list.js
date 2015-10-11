var React = require('react');

var OrderList = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='order-list-view'>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>我的订单</h6><div className="clear"></div></div>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>我的订单号：</label>
                                <span>12312311231</span>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow"><label>订单状态：</label><div className="formRight"><div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">未付款</option><option value="opt2">已审核</option><option value="opt3">已退货</option><option value="opt4">已关闭</option><option value="opt5">已锁定</option><option value="opt6">不限</option></select></div></div><div className="clear"></div></div>
                            <div className="formRow">
                                <label>日期范围：</label>
                                <div className="formRight">
                                    <input size="10" className="datepicker hasDatepicker" type="text" />
                                    <span className="ui-datepicker-append">－</span>
                                    <input size="10" className="datepicker hasDatepicker" type="text" />
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow"><label>电子钱包支付：</label><div className="formRight"><div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div></div><div className="clear"></div></div>
                            <div className="formRow"><label>基金账户支付：</label><div className="formRight"><div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt6">不限</option></select></div></div><div className="clear"></div></div>
                            <div className="formSubmit"><input value="查询" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                    <div className="widget">
                        <div className="title"><h6><span>日期：2015-08-14</span><span>订单号：1234567890123456</span></h6><div className="clear"></div></div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                                <tr>
                                    <td>商品</td>
                                    <td>单价</td>
                                    <td>数量</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>5</span></td>
                                </tr>
                                <tr>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>5</span></td>
                                </tr>
                                <tr>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>5</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='bottom-func'><span className='total-price'>商品总价：¥1000</span><a href='#/order_detail/12' className='detail'>点击查看详细信息</a><span className='total-price'>订单状态：已关闭</span><span className='delete'>删除</span></p>
                    </div>
                    <div className="widget">
                        <div className="title"><h6><span>日期：2015-08-14</span><span>订单号：1234567890123456</span></h6><div className="clear"></div></div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td>商品</td>
                                <td>单价</td>
                                <td>数量</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                <td><span>¥300</span></td>
                                <td><span>5</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <p className='bottom-func'><span className='total-price'>商品总价：¥1000</span><a href='#/order_detail/12' className='detail'>点击查看详细信息</a><span className='total-price'>订单状态：已关闭</span><span className='delete'>删除</span></p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = OrderList;
