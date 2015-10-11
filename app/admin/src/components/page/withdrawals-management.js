var React = require('react');

var WithdrawalsManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='withdrawals-management-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className='title'><h6>提现管理</h6><div className='clear'></div></div>
                        <form id="validate" className="form user-management" method="post" action="">
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>会员ID：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>提现状态：</label>
                                        <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">未处理</option><option value="opt2">已处理</option><option value="opt3">未处理</option></select></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow price">
                                        <label>姓名：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>提现时间：</label>
                                        <div className="formRight"><input className="datepicker hasDatepicker" type="text" /><span className="ui-datepicker-append">－</span><input className="datepicker hasDatepicker" type="text" /></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="查找" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                    <div className="widget">
                        <div className='title'>
                            <span className='add-user-btn'>当日</span>
                            <span className='add-user-btn'>7日</span>
                            <span className='add-user-btn'>30日</span>
                        </div>
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td>会员ID</td>
                                <td>姓名</td>
                                <td>银行卡号</td>
                                <td>提现时间</td>
                                <td>提现金额</td>
                                <td>体现状态</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span>DH123145513</span></td>
                                <td><span>叶良辰</span></td>
                                <td><span>5101312313123</span></td>
                                <td><span>2015-11-11 12:00:00</span></td>
                                <td><span>320</span></td>
                                <td><span>已发放</span></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"><div style={{display:'none'}} className="dataTables_filter"><label><span className="itemsPerPage">Search:</span> <input placeholder="type here..." type="text" /><div className="srch"></div></label></div><div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers"><span className="toFirst ui-corner-tl ui-corner-bl fg-button ui-button ui-state-disabled">First</span><span className="previous fg-button ui-button ui-state-disabled">Prev</span><span><span className="fg-button ui-button ui-state-disabled">1</span><span className="fg-button ui-button">2</span><span className="fg-button ui-button">3</span><span className="fg-button ui-button">4</span><span className="fg-button ui-button">5</span></span><span className="next fg-button ui-button">Next</span><span className="last ui-corner-tr ui-corner-br fg-button ui-button">Last</span></div></div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = WithdrawalsManagement;