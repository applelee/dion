var React = require('react');

var NoticeManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='notice-management-view'>
                <div className="wrapper">
                    <div className="widget">
                        <div className='title'><h6>发布公告</h6><div className='clear'></div></div>
                        <form id="validate" className="form user-management" method="post" action="">
                            <div className="formRow">
                                <label>公告：</label>
                                <div className="formRight"><textarea style={{height:'150px'}}></textarea></div><div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="发布" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = NoticeManagement;