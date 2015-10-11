var React = require('react');

var OrderManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='order-management-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className='title'><h6>订单管理</h6><div className='clear'></div></div>
                        <form id="validate" className="form user-management" method="post" action="">
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>订单号：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>订单金额：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow price">
                                        <label>购买会员ID：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>订单时间：</label>
                                        <div className="formRight"><input className="datepicker hasDatepicker" type="text" /><span className="ui-datepicker-append">－</span><input className="datepicker hasDatepicker" type="text" /></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>订单状态：</label>
                                        <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>购买会员名：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="查找" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                    <div className="widget">
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td></td>
                                <td>订单号</td>
                                <td>购买会员ID</td>
                                <td>购买会员名</td>
                                <td>订单时间</td>
                                <td>订单金额</td>
                                <td>订单状态</td>
                                <td>订单操作</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td><a href='#/order_detail'>123123123123123</a></td>
                                <td><span>1231313131313</span></td>
                                <td><span>lai来</span></td>
                                <td><span>2015-11-11</span></td>
                                <td><span>¥312</span></td>
                                <td><span>已审核</span></td>
                                <td><span>更改状态</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="title foot-box"><span className="titleIcon"><div className="checker" id="uniform-titleCheck"><input style={{opacity:1}} type="checkbox"/></div></span>
                            <span className="btn">批量删除</span><span className="btn">下架</span><span className="btn">发布到前台</span><span className="btn">取消前台展示</span>
                        </div>
                        <div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"><div style={{display:'none'}} className="dataTables_filter"><label><span className="itemsPerPage">Search:</span> <input placeholder="type here..." type="text" /><div className="srch"></div></label></div><div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers"><span className="toFirst ui-corner-tl ui-corner-bl fg-button ui-button ui-state-disabled">First</span><span className="previous fg-button ui-button ui-state-disabled">Prev</span><span><span className="fg-button ui-button ui-state-disabled">1</span><span className="fg-button ui-button">2</span><span className="fg-button ui-button">3</span><span className="fg-button ui-button">4</span><span className="fg-button ui-button">5</span></span><span className="next fg-button ui-button">Next</span><span className="last ui-corner-tr ui-corner-br fg-button ui-button">Last</span></div></div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = OrderManagement;