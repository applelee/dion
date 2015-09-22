var React = require('react');

var OrderDetail = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='order-detail-view'>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>订单详情</h6><div className="clear"></div></div>
                        <p>
                            <span>订单编号：1231231</span>
                            <span>订单状态：已收货</span>
                            <span>总金额：999.0</span><br/>
                            <span>创建时间：2015-08-14 01:46:31</span>
                            <span>收货时间：2015-08-16 01:46:31</span>
                        </p>
                        <div className='line'></div>
                        <p>
                            <span>收货地址：四川省成都市锦江区万达广场10栋</span><br/>
                            <span>物流费用：0.0元</span><br/>
                            <span>发货状态：已发货</span>
                        </p>
                        <div className='line'></div>
                        <p>
                            <span>物流单号：93498571734134</span>
                        </p>
                        <div className='line'></div>
                        <div className="title"><h6>商品明细</h6><div className="clear"></div></div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                                <tr>
                                    <td>商品名称</td>
                                    <td>商品编号</td>
                                    <td>单价</td>
                                    <td>数量</td>
                                    <td>合计</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className='name'>鸡尾酒</span></td>
                                    <td><span>91238987498713</span></td>
                                    <td><span>200</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥1000</span></td>
                                </tr>
                                <tr>
                                    <td><span className='name'>鸡尾酒</span></td>
                                    <td><span>91238987498713</span></td>
                                    <td><span>200</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥1000</span></td>
                                </tr>
                                <tr>
                                    <td><span className='name'>鸡尾酒</span></td>
                                    <td><span>91238987498713</span></td>
                                    <td><span>200</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥1000</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='line'></div>
                        <p><span className='total-price'>商品总价：¥3000</span></p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = OrderDetail;
