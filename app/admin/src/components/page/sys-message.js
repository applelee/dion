var React = require('react');

var SysMessage = React.createClass({
    render : function(){
        return (
            <div className='sys-message-view'>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>历史留言</h6></div>
                        <table className="sTable" cellpadding="0" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <td>留言主题</td>
                                <td>留言时间</td>
                                <td>回复时间</td>
                                <td>状态</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                            </tr>
                            <tr>
                                <td>Row 1</td>
                                <td>Row 2</td>
                                <td>Row 3</td>
                                <td>Row 4</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"><div style={{display:'none'}} className="dataTables_filter"><label><span className="itemsPerPage">Search:</span> <input placeholder="type here..." type="text" /><div className="srch"></div></label></div><div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers"><span className="toFirst ui-corner-tl ui-corner-bl fg-button ui-button ui-state-disabled">First</span><span className="previous fg-button ui-button ui-state-disabled">Prev</span><span><span className="fg-button ui-button ui-state-disabled">1</span><span className="fg-button ui-button">2</span><span className="fg-button ui-button">3</span><span className="fg-button ui-button">4</span><span className="fg-button ui-button">5</span></span><span className="next fg-button ui-button">Next</span><span className="last ui-corner-tr ui-corner-br fg-button ui-button">Last</span></div></div>
                    </div>
                    <div className="widget">
                        <div className="title"><h6>留言发布</h6></div>
                        <div className="formRow">
                            <div className="formRight formRight1"><textarea rows="8" cols="" name="textarea"></textarea></div>
                        </div>
                        <div className="formSubmit"><input value="提交留言" className="redB" type="submit" /></div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SysMessage;