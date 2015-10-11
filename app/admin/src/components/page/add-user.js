var React = require('react');

var AddUser = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='add-user-view'>
                <div className="wrapper">
                    <div className='widget'>
                        <div className='title'><h6>添加会员</h6><div className='clear'></div></div>
                        <form id="validate" className="form user-management" method="post" action="">
                            <div className="formRow">
                                <label>推荐码：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>用户名：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>姓名：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>性别：</label>
                                <div className="formRight"><label><input type='radio' name='sexy' /><span>男</span></label><label><input type='radio' name='sexy' /><span>女</span></label></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>所在地：</label>
                                <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div>
                                <div className='clear'></div>
                            </div>
                            <div className="formRow">
                                <label>手机号码：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>备用号码：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>身份证号码：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>详细地址：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="添加" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddUser;