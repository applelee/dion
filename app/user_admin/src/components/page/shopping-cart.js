var React = require('react');

var ShoppingCart = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='shopping-cart-view'>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>购物车</h6><div className="clear"></div></div>
                        <div className="title">
                            <span className="titleIcon">
                                <div className="checker" id="uniform-titleCheck">
                                    <span>
                                        <input type="checkbox" id="titleCheck" name="titleCheck" />
                                    </span>
                                </div>
                            </span>
                            <h6>Static table with checkboxes</h6>
                        </div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>商品名</td>
                                    <td>数量</td>
                                    <td>单价</td>
                                    <td>小计</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="checker" id="uniform-titleCheck2">
                                            <span>
                                                <input type="checkbox" id="titleCheck2" name="checkRow" />
                                            </span>
                                        </div>
                                    </td>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>¥1500</span></td>
                                    <td><span className='btn'>删除</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="checker" id="uniform-titleCheck2">
                                            <span>
                                                <input type="checkbox" id="titleCheck2" name="checkRow" />
                                            </span>
                                        </div>
                                    </td>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>¥1500</span></td>
                                    <td><span className='btn'>删除</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="checker" id="uniform-titleCheck2">
                                            <span>
                                                <input type="checkbox" id="titleCheck2" name="checkRow" />
                                            </span>
                                        </div>
                                    </td>
                                    <td><img src='./assets/images/backgrounds/bg.jpg' /><span className='name'>鸡尾酒</span></td>
                                    <td><span>5</span></td>
                                    <td><span>¥300</span></td>
                                    <td><span>¥1500</span></td>
                                    <td><span className='btn'>删除</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="title foot-box">
                            <span className="titleIcon">
                                <div className="checker" id="uniform-titleCheck">
                                    <span>
                                        <input type="checkbox" id="titleCheck" name="titleCheck" />
                                    </span>
                                </div>
                            </span>
                            <span className='btn'>批量删除</span>
                        </div>
                        <p><span>商品件数：3件</span><span>商品总价：¥1000</span></p>
                        <div className='line'></div>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formSubmit"><input value="去结算" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ShoppingCart;
