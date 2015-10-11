var React = require('react');

var SysLog = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='sys-log-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className='title'><h6>系统日志</h6><div className='clear'></div></div>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>奖金查询</label>
                                <div className="selector" style={{marginRight:'20px'}} id="uniform-undefined"><select name="select2"><option value="opt1">不限</option><option value="opt2">记录时间</option><option value="opt3">操作类型</option><option value="opt3">管理员</option><option value="opt3">不限</option></select></div>
                                <div className="formRight" style={{width:'200px',float:'left',marginRight:'20px'}}><input className="validate[required]" name="req" id="req" type="text" /></div>
                                <div className="formSubmit" style={{float:'left',margin:'0'}}><input value="查询" className="redB" type="submit" /></div>
                                <div className="clear"></div>
                            </div>
                        </form>
                    </div>
                    <div className="widget">
                        <table cellpadding="0" cellspacing="0" width="100%" className="sTable withCheck" id="checkAll">
                            <thead>
                            <tr>
                                <td>记录时间</td>
                                <td>操作类型</td>
                                <td>管理员</td>
                                <td>详细信息</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span>短发短发</span></td>
                                <td><span>的奋斗奋斗</span></td>
                                <td><span>的奋斗奋斗</span></td>
                                <td><span>奋斗奋斗</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SysLog;