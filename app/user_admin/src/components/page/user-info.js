var React = require('react');

var UserInfo = React.createClass({

    componentDidMount : function(){
        var $info_box = $('#info_box');
        var $modify_box = $('#modify_box');
        var $btn_modify = $('#btn_modify');
        var $cancel_btn = $('#cancel_btn');

        $btn_modify.bind('click',function(){
            $info_box.css({display:'none'});
            $modify_box.css({display:'block'});
        });

        $cancel_btn.bind('click',function(){
            $info_box.css({display:'block'});
            $modify_box.css({display:'none'});
        });
    },

    render : function(){
        return (
            <div className='user-info-view'>
                <div className='info-box' id='info_box'>
                    <div className="wrapper">
                        <div className="widget">
                            <p>会员编号：CN12340000</p>
                            <p>审核状态：已审核</p>
                            <p>推荐码：uds23ad</p>
                            <p>姓名：李田</p>
                            <p>性别：男</p>
                            <p>所在地：四川</p>
                            <p>手机号码：13000000000</p>
                            <p>备用号码：</p>
                            <div className="formSubmit"><input value="修改信息" id='btn_modify' className="redB" type="submit" /></div>
                            <div className="clear"></div>
                            <div className='line'></div>
                            <img className='id-card' src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' />
                            <p>身份证号码：510100198701010001</p>
                            <p>详细地址：四川成都瑞莲路111号1101</p>
                        </div>
                    </div>
                </div>
                <div className='modify-box' id='modify_box' style={{display:'none'}}>
                    <div className="wrapper">
                        <div className="widget">
                            <form id="validate" className="form" method="post" action="">
                                <div className="formRow">
                                    <label>姓名：</label>
                                    <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>新密码：</label>
                                    <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>重新输入新密码：</label>
                                    <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>性别：</label>
                                    <div className="formRight">
                                        <div className="floatL">
                                            <div id="uniform-selectReq" className="selector">
                                                <select name="selectReq" id="selectReq" className="validate[required]">
                                                    <option value="">男</option>
                                                    <option value="opt2">女</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>所在地：</label>
                                    <div className="formRight">
                                        <div className="floatL">
                                            <div id="uniform-selectReq" className="selector">
                                                <select name="selectReq" id="selectReq" className="validate[required]">
                                                    <option value="">Usual select box</option>
                                                    <option value="opt2">Option 2</option>
                                                    <option value="opt3">Option 3</option>
                                                    <option value="opt4">Option 4</option>
                                                    <option value="opt5">Option 5</option>
                                                    <option value="opt6">Option 6</option>
                                                    <option value="opt7">Option 7</option>
                                                    <option value="opt8">Option 8</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>手机号码：</label>
                                    <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                </div>
                                <div className="formRow">
                                    <label>备用号码：</label>
                                    <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                                </div>
                                <div className="formSubmit"><input value="保存" className="redB" type="submit" /><input value="取消" id='cancel_btn' className="redB" type="button" /></div>
                                <div className="clear"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = UserInfo;