var React = require('react');

var UserManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='user-management-view'>
                <div className="wrapper">
                    <div className="widget">
                        <a className='add-user-btn' href='#/add_user'>添加会员</a>
                    </div>
                    <div className='widget'>
                        <div className='title'><h6>会员列表</h6><div className='clear'></div></div>
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
                                        <label>身份证：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>姓名：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>所在地：</label>
                                        <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>手机：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className='oneTow'>
                                    <div className="formRow">
                                        <label>地址：</label>
                                        <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="筛选" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                    <div className="widget">
                        <table className="sTable" cellpadding="0" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <td>会员ID</td>
                                <td>姓名</td>
                                <td>性别</td>
                                <td>所在地</td>
                                <td>手机</td>
                                <td>身份证</td>
                                <td>详细地址</td>
                                <td>会员状态</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                                <td>Row 6</td>
                                <td>Row 7</td>
                                <td>Row 8</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                                <td>Row 6</td>
                                <td>Row 7</td>
                                <td>Row 8</td>
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

module.exports = UserManagement;