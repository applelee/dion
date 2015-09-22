var React = require('react');

var BindingInfo = React.createClass({
    render : function(){
        return (
            <div className='binding-info-view'>
                <div className="wrapper">
                    <div className="widget">
                        <p>会员状态：已审核</p>
                    </div>
                    <div className="widget">
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>您的银行卡：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>开户行：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='clear'></div>
                                <input size="25" id="file" name="file" type="file" />
                            </div>
                            <div className="formRow">
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='clear'></div>
                                <input size="25" id="file" name="file" type="file" />
                            </div>
                            <div className="formRow">
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='img-box'><img src='http://www.people.com.cn/h/pic/20110719/66/8911787866359152746.jpg' /></div>
                                <div className='clear'></div>
                                <input size="25" id="file" name="file" type="file" />
                            </div>
                            <div className="formSubmit"><input value="确定" className="redB" type="submit" /><input value="取消" id='cancel_btn' className="redB" type="button" /></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = BindingInfo;
