var React = require('react');

var TopNav = React.createClass({
    render : function(){
        return(
            <div className="topNav">
                <div className="wrapper">
                    <div className="welcome"><a href="#" title=""><img src="assets/admin/images/userPic.png" alt="" /></a><span>你好！苹果下饭</span></div>
                    <div className="userNav">
                        <ul>
                            <li><a href="#" title=""><img src="assets/admin/images/icons/topnav/profile.png" alt="" /><span>简介</span></a></li>
                            <li><a href="#" title=""><img src="assets/admin/images/icons/topnav/tasks.png" alt="" /><span>任务</span></a></li>
                            <li className="dd"><a title=""><img src="assets/admin/images/icons/topnav/messages.png" alt="" /><span>消息</span><span className="numberTop">8</span></a>
                                <ul className="userDropdown">
                                    <li><a href="#" title="" className="sAdd">new message</a></li>
                                    <li><a href="#" title="" className="sInbox">inbox</a></li>
                                    <li><a href="#" title="" className="sOutbox">outbox</a></li>
                                    <li><a href="#" title="" className="sTrash">trash</a></li>
                                </ul>
                            </li>
                            <li style={{display:'none'}}><a href="#" title=""><img src="assets/admin/images/icons/topnav/settings.png" alt="" /><span>Settings</span></a></li>
                            <li style={{display:'none'}}><a href="login.html" title=""><img src="assets/admin/images/icons/topnav/logout.png" alt="" /><span>Logout</span></a></li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = TopNav;