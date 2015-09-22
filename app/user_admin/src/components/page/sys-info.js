var React = require('react');

var SysInfo = React.createClass({
    render : function(){
        return (
            <div className='sys-info-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className="title"><h6>公告信息</h6><div className="clear"></div></div>
                        <p>尊进的会员：xxxx  欢迎来到抢相因</p>
                        <p>您的推荐码为：ABCD</p>
                        <p>推荐链接为:http://xxxxxxx</p>
                    </div>
                    <div className="widget">
                        <div className="title"><h6>公告内容</h6><div className="clear"></div></div>
                        <p>... ...</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SysInfo;
