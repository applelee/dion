var React = require('react');

var BonusQuery = React.createClass({
    render : function(){
        return (
            <div className='performance-view'>
                <div className="wrapper">
                    <div className='widget'>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>奖金查询</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div>
                                <div className="formSubmit"><input value="查询" className="redB" type="submit" /></div>
                            </div>
                        </form>
                        <div className='line'></div>
                        <p>查询结果...</p>
                        <table className="sTable" cellpadding="0" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <td>会员编号</td>
                                <td>姓名</td>
                                <td>期别</td>
                                <td>发放金额</td>
                                <td>发放日期</td>
                                <td>状态</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                                <td>Row 5</td>
                                <td>Row 6</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = BonusQuery;
