var React = require('react');

var Pay = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='pay-view'>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>收货地址</h6><div className="clear"></div></div>
                        <p>
                            <span>配送地址：</span>
                        </p>
                        <div className='line'></div>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>收货人：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>手机：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>地区：</label>
                                <div className="formRight">
                                    <div className="floatL">
                                        <div id="uniform-selectReq" className="selector">
                                            <select name="selectReq" id="selectReq" className="validate[required]">
                                                <option value="">国</option>
                                                <option value="opt2">女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="floatL">
                                        <div id="uniform-selectReq" className="selector">
                                            <select name="selectReq" id="selectReq" className="validate[required]">
                                                <option value="">省</option>
                                                <option value="opt2">女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="floatL">
                                        <div id="uniform-selectReq" className="selector">
                                            <select name="selectReq" id="selectReq" className="validate[required]">
                                                <option value="">市</option>
                                                <option value="opt2">女</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='clear'></div>
                            </div>
                        </form>
                    </div>
                    <div className="widget">
                        <div className="title"><h6>商品清单</h6><div className="clear"></div></div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td>商品名称</td>
                                <td>数量</td>
                                <td>单价（元）</td>
                                <td>小计</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span className='name'>鸡尾酒</span></td>
                                <td><span>91238987498713</span></td>
                                <td><span>200</span></td>
                                <td><span>5</span></td>
                            </tr>
                            <tr>
                                <td><span className='name'>鸡尾酒</span></td>
                                <td><span>91238987498713</span></td>
                                <td><span>200</span></td>
                                <td><span>5</span></td>
                            </tr>
                            <tr>
                                <td><span className='name'>鸡尾酒</span></td>
                                <td><span>91238987498713</span></td>
                                <td><span>200</span></td>
                                <td><span>5</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className='line'></div>
                        <p>
                            <span className='total-price'>商品总价：¥3000</span>
                            <span className='total-price'>商品件数：3</span>
                            <span className='total-price'>运费：¥3000</span>
                            <span className='total-price'>应付金额：¥3000</span>
                        </p>
                    </div>
                    <div className="widget">
                        <div className="title"><h6>订单结算</h6><div className="clear"></div></div>
                        <p>
                            <span>电子钱包余额：100.0元</span><br/>
                            <span>基金账户余额：200.0元：</span>
                        </p>
                        <div className='line'></div>
                        <p className='clearfix'>
                            <label><input type='radio' name='pay' /><span>电子钱包</span></label><label><input type='radio' name='pay' /><span>基金账户</span></label><label><input type='radio' name='pay' /><span>电子钱包＋基金账户</span></label>
                        </p>
                    </div>
                    <form id="validate" className="form" method="post" action="">
                        <div className="formSubmit"><input value="提交付款" className="redB" type="submit" /></div>
                        <div className="clear"></div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Pay;
