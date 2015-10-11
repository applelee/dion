var React = require('react');

var MessageManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='message-management-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className='title'><h6>留言管理</h6><div className='clear'></div></div>
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
                                        <label>留言状态：</label>
                                        <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">未回复</option><option value="opt2">已回复</option><option value="opt3">未处理</option></select></div>
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
                                <div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="筛选" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                    <div className="widget">
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td>会员名</td>
                                <td>姓名</td>
                                <td>留言信息</td>
                                <td>留言状态</td>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span>短发短发</span></td>
                                <td><span>叶良辰</span></td>
                                <td><span>只要记住我叫良辰</span></td>
                                <td><span>已恢复</span></td>
                                <td><span>删除</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = MessageManagement;