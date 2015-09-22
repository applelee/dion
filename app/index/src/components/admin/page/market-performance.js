var React = require('react');

var MarketPerformance = React.createClass({
    render : function(){
        return (
            <div className='performance-view'>
                <div className="wrapper">
                    <div className='widget'>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>市场业绩</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div>
                                <div className="formSubmit"><input value="查询" className="redB" type="submit" /></div>
                            </div>
                        </form>
                        <div className='line'></div>
                        <p>查询结果...</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = MarketPerformance;
