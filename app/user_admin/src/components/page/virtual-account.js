var React = require('react');

var VirtualAccount = React.createClass({
    render : function(){
        return (
            <div className='virtual-account-view'>
                <div className="wrapper">
                    <div className="widget relative-box">
                        <p>电子账户：CN12340000</p>
                        <p>可用余额：1234512元</p>
                        <div className="formSubmit"><a><input value="充值" className="redB" type="submit" /></a><input value="提现" className="redB" type="button" /></div>
                    </div>
                    <div className="widget">
                        <div className="formRow">
                            <label>交易日期:</label>
                            <div className="formRight">
                                <input size="10" className="datepicker hasDatepicker" type="text" />
                                <span className="ui-datepicker-append">－</span>
                                <input size="10" className="datepicker hasDatepicker" type="text" />
                                <input value="查询" className="redB" type="submit" />
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="widget">
                        <table className="sTable" cellpadding="0" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <td>交易日期</td>
                                <td>摘要</td>
                                <td>存入</td>
                                <td>消费</td>
                                <td>取出</td>
                                <td>结余</td>
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

module.exports = VirtualAccount;
