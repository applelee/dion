var React = require('react');

var UserManagement = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='user-management-view'>
                <div className="wrapper">
                    <div className='title'><h6>会员列表</h6><div className='clear'></div></div>
                    <form id="validate" className="form" method="post" action="">
                        <div className='oneTow'>

                        </div>
                        <div className='oneTow'>

                        </div>
                        <div className="formRow">
                            <label>奖金查询</label>
                            <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div>
                            <div className="formSubmit"><input value="查询" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = UserManagement;